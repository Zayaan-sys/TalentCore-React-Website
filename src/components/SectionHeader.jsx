export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-brandOrange">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-brandBlue md:text-6xl">
        {title}
      </h1>
      {children ? (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {children}
        </p>
      ) : null}
    </div>
  );
}
