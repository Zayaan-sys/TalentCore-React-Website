import SectionHeader from "../components/SectionHeader.jsx";

const credentials = [
  "Founder of TalentCore (Pty) Ltd",
  "Registered Industrial and Organisational Psychologist",
  "Human Science Practitioner",
  "Thinking Partner and Leadership Coach",
  "More than 20 years in Human Resources and organisational development",
];

export default function About() {
  return (
    <section className="px-5 py-20">
      <SectionHeader eyebrow="About" title="About TalentCore">
        TalentCore provides psychology-informed thinking partnerships that help
        individuals and organisations grow with clarity and purpose.
      </SectionHeader>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] bg-brandBlue p-8 text-white shadow-soft">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brandGold">
            Practitioner
          </p>
          <h2 className="mt-5 font-display text-5xl font-bold">
            Faatiemah Lodewyk
          </h2>
          <p className="mt-5 leading-8 text-white/82">
            A registered Industrial Psychologist with over 15 years of
            professional practice and more than 20 years of experience in Human
            Resources and organisational development.
          </p>
        </article>

        <article className="rounded-[2rem] border border-brandBlue/10 bg-white p-8 shadow-soft">
          <h2 className="font-display text-4xl font-bold text-brandBlue">
            Professional foundation
          </h2>
          <ul className="mt-6 grid gap-3">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="rounded-2xl bg-brandGrey px-5 py-4 font-semibold text-slate-700"
              >
                {credential}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mx-auto mt-8 max-w-6xl rounded-[2rem] border border-brandOrange/20 bg-brandGold/15 p-8">
        <h2 className="font-display text-4xl font-bold text-brandBlue">
          The TalentCore approach
        </h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
          The work is practical, reflective, and deeply human: a space to think
          clearly, develop leadership capability, and translate insight into
          confident action.
        </p>
      </div>
    </section>
  );
}
