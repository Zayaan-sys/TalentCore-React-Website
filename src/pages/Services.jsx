import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";

const divisions = [
  {
    eyebrow: "Psychology division",
    title: "People, leadership and organisational growth",
    text: "Coaching and organisational support shaped by psychology, practical HR experience, and a calm partnership model.",
    to: "/services/psychology",
    variant: "blue",
  },
  {
    eyebrow: "Technology division",
    title: "Digital systems that make work feel lighter",
    text: "Practical technology support for websites, workflows, automation, and better digital operations.",
    to: "/services/technology",
    variant: "gold",
  },
];

export default function Services() {
  return (
    <section className="px-5 py-20">
      <SectionHeader eyebrow="Divisions" title="Choose a TalentCore side">
        Select the division you want to explore. Each path opens its own focused
        service page, so visitors can go straight to what they need.
      </SectionHeader>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-2">
        {divisions.map((division) => {
          const isBlue = division.variant === "blue";

          return (
            <Link
              key={division.title}
              to={division.to}
              className="group rounded-[2.7rem] bg-white/70 p-4 shadow-soft transition hover:-translate-y-1"
            >
              <div
                className={`min-h-[430px] rounded-[2.2rem] p-8 md:p-10 ${
                  isBlue ? "bg-brandBlue text-white" : "bg-brandGold/20 text-brandBlue"
                }`}
              >
                <p
                  className={`text-sm font-extrabold uppercase tracking-[0.34em] ${
                    isBlue ? "text-brandGold" : "text-brandOrange"
                  }`}
                >
                  {division.eyebrow}
                </p>
                <h2 className="mt-8 font-display text-5xl font-bold leading-tight md:text-6xl">
                  {division.title}
                </h2>
                <p
                  className={`mt-7 text-lg leading-9 ${
                    isBlue ? "text-white/84" : "text-slate-700"
                  }`}
                >
                  {division.text}
                </p>
                <span
                  className={`mt-10 inline-flex rounded-full px-6 py-3 font-extrabold transition group-hover:translate-x-1 ${
                    isBlue
                      ? "bg-brandGold text-brandBlue"
                      : "bg-brandBlue text-white"
                  }`}
                >
                  Explore {division.eyebrow.replace(" division", "")}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
