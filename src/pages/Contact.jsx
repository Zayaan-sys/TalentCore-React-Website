import ContactForm from "../components/ContactForm.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { isConfigured, siteLinks } from "../config/site.js";

export default function Contact() {
  const hasBooking = isConfigured(siteLinks.calBookingUrl);

  return (
    <section className="px-5 py-20">
      <SectionHeader eyebrow="Contact" title="Contact and book">
        Send a message, book a discovery call, or use the WhatsApp shortcut once
        the live details are configured.
      </SectionHeader>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ContactForm />

        <aside className="rounded-[2rem] border border-brandBlue/10 bg-white p-6 shadow-soft">
          <div className="mb-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brandOrange">
              Booking
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brandBlue">
              Discovery call
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Cal.com can be embedded here once the booking URL is added.
            </p>
          </div>

          {hasBooking ? (
            <iframe
              title="Cal.com Booking"
              src={siteLinks.calBookingUrl}
              className="h-[680px] w-full rounded-[1.5rem] border border-brandBlue/10"
            />
          ) : (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-brandBlue/25 bg-brandGrey p-8 text-center">
              <p className="font-display text-4xl font-bold text-brandBlue">
                Cal.com placeholder
              </p>
              <p className="mt-4 max-w-md leading-7 text-slate-600">
                Add the live booking URL in `src/config/site.js` to show an
                embedded calendar or booking page here.
              </p>
            </div>
          )}
        </aside>
      </div>

      <div className="mx-auto mt-8 max-w-6xl rounded-[2rem] bg-brandBlue p-8 text-white">
        <h2 className="font-display text-4xl font-bold">
          Three simple ways to connect
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Message", "WhatsApp", "Book instantly"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 font-extrabold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
