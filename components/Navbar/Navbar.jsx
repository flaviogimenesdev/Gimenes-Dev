"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./Navbar.css"

const NAV_ITEMS = [
  { href: "#projetos", key: "nav.projects" },
  { href: "#servicos", key: "nav.services" },
  { href: "#processo", key: "nav.process" },
  { href: "#sobre", key: "nav.about" },
  { href: "#faq", key: "nav.faq" },
  { href: "#contato", key: "nav.contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav-row">
          <a href="#home" className="brand">
            <span className="dot"></span>FG Dev_
          </a>

          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <div className="lang-switch" role="group" aria-label="Idioma / Language">
              <button type="button" className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")}>
                🇧🇷 PT
              </button>
              <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
                EN 🇺🇸
              </button>
            </div>

            <button
              id="menu-toggle"
              type="button"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={open ? "open" : ""}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="mlink" onClick={() => setOpen(false)}>
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
