// Serverless function for sending contact emails via Resend on Vercel

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO ?? "ibnalarab264@gmail.com";
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

  if (!apiKey) {
    res.status(500).json({ error: "RESEND_API_KEY is not set" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ error: "Invalid JSON body" });
      return;
    }
  }

  const { name, email, company, message } = body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields: name, email, message" });
    return;
  }

  const subject = `New contact message from ${name}`;
  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: email,
    }),
  });

  if (!resendRes.ok) {
    const text = await resendRes.text();
    res.status(resendRes.status).json({ error: text || "Failed to send email" });
    return;
  }

  res.status(200).json({ success: true });
}
