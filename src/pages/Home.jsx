import { Link } from "react-router-dom";

const proofPoints = [
  "Industrial psychology lens",
  "Leadership and growth coaching",
  "Human-centred organisational support",
];

const divisions = [
  {
    eyebrow: "Psychology",
    title: "People, leadership and organisational growth",
    text: "Coaching and thinking partnerships for individuals, leaders, and teams who need clarity, resilience, and purposeful movement.",
    highlights: ["Coaching", "Leadership development", "Organisational support"],
    to: "/services#psychology",
  },
  {
    eyebrow: "Technology",
    title: "Digital systems that make work feel lighter",
    text: "Technology support for small businesses and teams who need practical websites, automation, and clearer digital workflows.",
    highlights: ["Websites", "Automation", "Digital operations"],
    to: "/services#technology",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-brand-radial px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brandOrange">
              TalentCore
            </p>
            <h1 className="mt-5 font-display text-6xl font-bold leading-[0.95] text-brandBlue md:text-7xl">
              Human insight and digital clarity for growing teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore two connected sides of TalentCore: psychology-informed
              coaching for people and organisations, and technology support for
              cleaner systems, websites, and workflows.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services#psychology"
                className="rounded-full bg-brandBlue px-7 py-4 text-center font-extrabold text-white shadow-lg shadow-brandBlue/20 transition hover:-translate-y-1 hover:bg-brandOrange"
              >
                Explore Psychology
              </Link>
              <Link
                to="/services#technology"
                className="rounded-full border-2 border-brandBlue px-7 py-4 text-center font-extrabold text-brandBlue transition hover:-translate-y-1 hover:border-brandOrange hover:text-brandOrange"
              >
                Explore Technology
              </Link>
            </div>
          </div>

          <div className="reveal-delay relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brandGold/40 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-brandOrange/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.4rem] bg-white p-6 shadow-soft">
              <div className="rounded-[1.8rem] bg-brandBlue p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brandGold">
                  Thinking partnership
                </p>
                <blockquote className="mt-10 font-display text-4xl font-semibold leading-tight">
                  Grow with steadier choices, better conversations, and clearer
                  next steps.
                </blockquote>
                <div className="mt-10 grid gap-3">
                  {proofPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-brandOrange">
            Two divisions
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold text-brandBlue">
            Choose the side you want to explore
          </h2>
        </div>
        <div className="mx-auto mb-16 grid max-w-6xl gap-6 lg:grid-cols-2">
          {divisions.map((division) => (
            <Link
              key={division.title}
              to={division.to}
              className="group rounded-[2.3rem] border border-brandBlue/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brandOrange">
                {division.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-4xl font-bold leading-tight text-brandBlue">
                {division.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{division.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {division.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-brandGrey px-4 py-2 text-sm font-extrabold text-brandBlue"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <span className="mt-8 inline-flex font-extrabold text-brandOrange transition group-hover:translate-x-1">
                Explore {division.eyebrow}
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            ["Clarity", "Make sense of complexity and choose the next right step."],
            ["Resilience", "Build grounded capacity for change, pressure, and growth."],
            ["Purpose", "Align personal strengths with work that matters."],
          ].map(([title, text]) => (
            <article
              key={title}
              className="reveal-late rounded-[2rem] border border-brandBlue/10 bg-white/78 p-7 shadow-sm"
            >
              <div className="mb-5 h-2 w-16 rounded-full bg-brandGold" />
              <h2 className="font-display text-3xl font-bold text-brandBlue">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
