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
    <div className="fixed inset-x-4 bottom-4 z-40 flex flex-col gap-2 md:hidden">
      {whatsappOptions.map((option) =>
        isConfigured(option.number) ? (
          <a
            key={option.label}
            href={`https://wa.me/${option.number}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-1 sm:px-5 sm:text-base"
          >
            {option.label}
          </a>
        ) : (
          <span
            key={option.label}
            className="rounded-full border border-brandBlue/10 bg-white/90 px-4 py-3 text-center text-xs font-extrabold text-brandBlue shadow-soft backdrop-blur sm:px-5"
          >
            {option.label} pending
          </span>
        ),
      )}
    </div>
  );
}
