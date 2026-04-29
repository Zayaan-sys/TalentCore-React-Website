import { isConfigured, siteLinks } from "../config/site.js";

const whatsappOptions = [
  {
    label: "Psychology WhatsApp",
    number: siteLinks.whatsapp.psychology,
  },
  {
    label: "Technology WhatsApp",
    number: siteLinks.whatsapp.technology,
  },
];

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 sm:flex">
      {whatsappOptions.map((option) =>
        isConfigured(option.number) ? (
          <a
            key={option.label}
            href={`https://wa.me/${option.number}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-3 text-center font-extrabold text-white shadow-soft transition hover:-translate-y-1"
          >
            {option.label}
          </a>
        ) : (
          <span
            key={option.label}
            className="rounded-full border border-brandBlue/10 bg-white/90 px-5 py-3 text-center text-xs font-extrabold text-brandBlue shadow-soft backdrop-blur"
          >
            {option.label} pending
          </span>
        ),
      )}
    </div>
  );
}
