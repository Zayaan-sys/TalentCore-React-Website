import { isConfigured, siteLinks } from "../config/site.js";

export default function ContactForm() {
  const hasEndpoint = isConfigured(siteLinks.formEndpoint);

  return (
    <form
      action={hasEndpoint ? siteLinks.formEndpoint : undefined}
      method="POST"
      className="rounded-[2rem] border border-brandBlue/10 bg-white p-6 shadow-soft"
      onSubmit={(event) => {
        if (!hasEndpoint) {
          event.preventDefault();
        }
      }}
    >
      <div className="mb-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brandOrange">
          Message
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-brandBlue">
          Start the conversation
        </h2>
        {!hasEndpoint ? (
          <p className="mt-3 rounded-2xl bg-brandGrey p-3 text-sm text-slate-600">
            Formspree is not configured yet, so this demo form will not submit.
          </p>
        ) : null}
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-brandBlue">
          Name
          <input
            name="name"
            required
            className="rounded-2xl border border-brandBlue/15 bg-brandGrey px-4 py-3 text-slate-800 outline-none transition focus:border-brandOrange focus:bg-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brandBlue">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-2xl border border-brandBlue/15 bg-brandGrey px-4 py-3 text-slate-800 outline-none transition focus:border-brandOrange focus:bg-white"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brandBlue">
          Message
          <textarea
            name="message"
            rows="5"
            required
            className="rounded-2xl border border-brandBlue/15 bg-brandGrey px-4 py-3 text-slate-800 outline-none transition focus:border-brandOrange focus:bg-white"
            placeholder="Tell us what kind of support you are looking for."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brandBlue px-6 py-3 font-extrabold text-white transition hover:bg-brandOrange disabled:cursor-not-allowed disabled:opacity-70"
        disabled={!hasEndpoint}
      >
        {hasEndpoint ? "Send message" : "Connect Formspree to enable"}
      </button>
    </form>
  );
}
