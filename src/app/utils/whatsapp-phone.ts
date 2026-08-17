export const DEFAULT_WHATSAPP_PHONE = "5524998535387";

export function parseWhatsappPhone(href?: string | null): string | null {
  if (!href) return null;

  const waMeMatch = href.match(/wa\.me\/(\d+)/);
  if (waMeMatch) return waMeMatch[1];

  const digits = href.replace(/\D/g, "");
  return digits.length >= 10 ? digits : null;
}
