import { Link } from "react-router-dom";

export default function DivisionHero({
  eyebrow,
  title,
  children,
  variant = "blue",
}) {
  const isBlue = variant === "blue";

  return (
    <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-white/70 p-4 shadow-soft">
      <div
        className={`rounded-[2rem] p-8 md:p-12 ${
          isBlue ? "bg-brandBlue text-white" : "bg-brandGold/20 text-brandBlue"
        }`}
      >
        <p
          className={`text-sm font-extrabold uppercase tracking-[0.32em] ${
            isBlue ? "text-brandGold" : "text-brandOrange"
          }`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold leading-tight md:text-7xl">
          {title}
        </h1>
        <p
          className={`mt-6 max-w-4xl text-lg leading-9 ${
            isBlue ? "text-white/84" : "text-slate-700"
          }`}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

export function BackToDivisionsLink() {
  return (
    <Link
      to="/services"
      className="mx-auto mb-8 inline-flex rounded-full border-2 border-brandBlue px-5 py-2 text-sm font-extrabold text-brandBlue transition hover:border-brandOrange hover:text-brandOrange"
    >
      Back to divisions
    </Link>
  );
}
