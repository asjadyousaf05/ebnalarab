export const trackContactClick = (href: string, rawNumber: string) => {
  if (typeof window === "undefined") return;
  const cleaned = rawNumber.replace(/[^+\d]/g, "");
  if (!cleaned) return;

  const isPhone = href.startsWith("tel:");
  const isWhatsApp = href.includes("wa.me");
  if (!isPhone && !isWhatsApp) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: isPhone ? "phone_call" : "whatsapp_click",
    phone_number: cleaned,
  });
};
