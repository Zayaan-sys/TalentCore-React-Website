import { Link } from "react-router-dom";
import {
  BackToDivisionsLink,
  default as DivisionHero,
} from "../components/DivisionHero.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import { technologyServices } from "../data/divisionServices.js";

export default function TechnologyServices() {
  return (
    <section className="px-5 py-20">
      <div className="text-center">
        <BackToDivisionsLink />
      </div>
      <DivisionHero
        eyebrow="Technology division"
        title="Digital systems that make work feel lighter"
        variant="gold"
      >
        Practical technology support for websites, workflows, automation, and
        better digital operations.
      </DivisionHero>

      <ServiceGrid services={technologyServices} marker="gold" />

      <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] bg-brandBlue p-8 text-center text-white shadow-soft">
        <h2 className="font-display text-4xl font-bold">
          Ready to explore the Technology side?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/82">
          Start with a practical conversation about what should be built,
          automated, simplified, or connected.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-block rounded-full bg-brandGold px-7 py-4 font-extrabold text-brandBlue transition hover:bg-brandOrange hover:text-white"
        >
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}
