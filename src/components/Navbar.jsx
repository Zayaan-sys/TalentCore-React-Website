import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brandBlue/10 bg-white/82 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <NavLink to="/" aria-label="TalentCore home" className="shrink-0">
          <img
            src={logo}
            alt="TalentCore logo"
            className="h-14 w-auto max-w-[260px] sm:max-w-[360px]"
          />
        </NavLink>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="rounded-full bg-brandBlue px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-brandBlue/20 transition hover:-translate-y-0.5 hover:bg-brandOrange"
        >
          Book
        </NavLink>
      </div>

      <nav className="flex justify-center gap-5 border-t border-brandBlue/10 px-4 py-3 text-sm md:hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
