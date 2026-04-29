export default function ServiceGrid({ services, marker = "blue" }) {
  const isBlue = marker === "blue";

  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <article
          key={service.title}
          className="group rounded-[2rem] border border-brandBlue/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl font-display text-3xl font-bold transition group-hover:bg-brandOrange group-hover:text-white ${
              isBlue
                ? "bg-brandBlue text-brandGold"
                : "bg-brandGold text-brandBlue"
            }`}
          >
            {index + 1}
          </div>
          <h2 className="mt-8 font-display text-4xl font-bold text-brandBlue">
            {service.title}
          </h2>
          <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
        </article>
      ))}
    </div>
  );
}
