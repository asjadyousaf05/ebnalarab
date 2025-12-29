type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const RESEND_TO = import.meta.env.VITE_RESEND_TO ?? "ibnalarab264@gmail.com";
const RESEND_FROM = import.meta.env.VITE_RESEND_FROM ?? "onboarding@resend.dev";
const RESEND_ENDPOINT = "/api/resend";

export const sendContactEmail = async ({ name, email, company, message }: ContactPayload) => {
  const subject = `New contact message from ${name}`;
  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: RESEND_TO,
      subject,
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to send email via Resend.");
  }
};
