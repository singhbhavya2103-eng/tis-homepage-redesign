import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { applyUrl, contact, navItems } from "../data/site";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu with Escape; the listener only exists while it is open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="tis-header" id="home">
      <div className="tis-topbar">
        <div className="tis-topbar-content">
          <a className="tis-phone" href={contact.helpline.href}>
            <Phone size={18} fill="currentColor" aria-hidden="true" />
            <span>
              <span className="tis-phone-label">
                ADMISSIONS HELPLINE NO.{" "}
              </span>
              {contact.helpline.label}
            </span>
          </a>

          <a className="tis-enquire" href="#admissions">
            Enquire Now
          </a>

          <ThemeToggle />
        </div>
      </div>

      <nav className="tis-navigation" aria-label="Main navigation">
        <a
          href="#home"
          className="tis-brand"
          aria-label="Tulas International School home"
          onClick={closeMenu}
        >
          <img
            src="/images/schoolLogo.jpg"
            alt=""
            width="88"
            height="88"
            className="tis-brand-logo"
          />
        </a>

        <div
          id="primary-menu"
          className={`tis-nav-links ${menuOpen ? "is-open" : ""}`}
        >
          {navItems.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {label}
            </a>
          ))}

          <a
            className="tis-apply"
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          className="tis-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={30} aria-hidden="true" />
          ) : (
            <Menu size={34} aria-hidden="true" />
          )}
        </button>
      </nav>
    </header>
  );
}
