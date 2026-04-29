import { Link } from "react-router-dom";
import {
  BackToDivisionsLink,
  default as DivisionHero,
} from "../components/DivisionHero.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import { psychologyServices } from "../data/divisionServices.js";

export default function PsychologyServices() {
  return (
    <section className="px-5 py-20">
      <div className="text-center">
        <BackToDivisionsLink />
      </div>
      <DivisionHero
        eyebrow="Psychology division"
        title="People, leadership and organisational growth"
      >
        Coaching and organisational support shaped by psychology, practical HR
        experience, and a calm partnership model.
      </DivisionHero>

      <ServiceGrid services={psychologyServices} />

      <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] bg-brandBlue p-8 text-center text-white shadow-soft">
        <h2 className="font-display text-4xl font-bold">
          Ready to explore the Psychology side?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/82">
          A discovery conversation is the simplest way to understand what kind
          of people-focused support would be most useful.
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
