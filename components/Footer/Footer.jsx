"use client";

import { useLanguage } from "@/context/LanguageContext";
import { IconGithub, IconLinkedin, IconInstagram } from "@/lib/icons";
import "./Footer.css"

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap footer-row">
        <a href="#home" className="brand">
          <span className="dot"></span>FG Dev_
        </a>

        <p className="footer-copy">
          © {year} Flávio Gimenes. {t("footer.rights")}
        </p>

        <div className="footer-social">
          <a href="https://github.com/flavingimenes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/flaviogimeness"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://www.instagram.com/flavio_gabrielll/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
