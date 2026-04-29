import { isConfigured, siteLinks } from "../config/site.js";

export default function WhatsAppButton() {
  if (!isConfigured(siteLinks.whatsappNumber)) {
    return (
      <div className="fixed bottom-5 right-5 z-40 hidden rounded-full border border-brandBlue/10 bg-white/90 px-4 py-3 text-xs font-bold text-brandBlue shadow-soft backdrop-blur sm:block">
        WhatsApp placeholder
      </div>
    );
  }

  return (
    <a
      href={`https://wa.me/${siteLinks.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] px-5 py-3 font-extrabold text-white shadow-soft transition hover:-translate-y-1"
    >
      WhatsApp
    </a>
  );
}
