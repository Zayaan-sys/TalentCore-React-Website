export default function Footer() {
  return (
    <footer className="border-t border-brandBlue/10 bg-white/70 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-brandBlue">
          TalentCore (Pty) Ltd. All rights reserved. &copy; {new Date().getFullYear()}
        </p>
        <p>Clarity. Resilience. Purpose.</p>
      </div>
    </footer>
  );
}
