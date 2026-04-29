import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";

const services = [
  {
    title: "Individual Coaching",
    text: "Support for navigating change, strengthening resilience, and making clearer choices.",
  },
  {
    title: "Leadership Development",
    text: "Reflective coaching for leaders who want to grow their presence, decisions, and conversations.",
  },
  {
    title: "HR and Organisational Support",
    text: "Psychology-informed partnership across people, teams, and organisational development needs.",
  },
  {
    title: "Thinking Partnerships",
    text: "Structured space to untangle complexity and move forward with purpose and confidence.",
  },
];

export default function Services() {
  return (
    <section className="px-5 py-20">
      <SectionHeader eyebrow="Services" title="Grow with the right support">
        Coaching and organisational support shaped by psychology, practical HR
        experience, and a calm partnership model.
      </SectionHeader>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group rounded-[2rem] border border-brandBlue/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brandBlue font-display text-3xl font-bold text-brandGold transition group-hover:bg-brandOrange group-hover:text-white">
              {index + 1}
            </div>
            <h2 className="mt-8 font-display text-4xl font-bold text-brandBlue">
              {service.title}
            </h2>
            <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] bg-brandBlue p-8 text-center text-white shadow-soft">
        <h2 className="font-display text-4xl font-bold">
          Not sure which service fits?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/82">
          A discovery conversation is the simplest way to understand what kind
          of support would be most useful.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-block rounded-full bg-brandGold px-7 py-4 font-extrabold text-brandBlue transition hover:bg-brandOrange hover:text-white"
        >
          Book a Discovery Call
        </Link>
      </div>
    </section>
  );
}
