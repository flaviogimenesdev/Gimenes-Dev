"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import { IconMail, IconWhatsapp, IconLinkedin, IconGithub, IconInstagram } from "@/lib/icons";
import "./Contact.css"

const CONTACT_LINKS = [
  { id: "email", Icon: IconMail, label: "E-mail", value: "flaviogimenes.dev@gmail.com", href: "mailto:flaviogimenes.dev@gmail.com" },
  {
    id: "whatsapp",
    Icon: IconWhatsapp,
    label: "WhatsApp",
    value: "+55 65 99952-7412",
    href: "https://wa.me/5565999527412",
    external: true,
  },
  {
    id: "linkedin",
    Icon: IconLinkedin,
    label: "LinkedIn",
    value: "Flávio Gimenes",
    href: "https://www.linkedin.com/in/flaviogimeness",
    external: true,
  },
  {
    id: "github",
    Icon: IconGithub,
    label: "GitHub",
    value: "flavingimenes",
    href: "https://github.com/flavingimenes",
    external: true,
  },
  {
    id: "instagram",
    Icon: IconInstagram,
    label: "Instagram",
    value: "@flavio_gabrielll",
    href: "https://www.instagram.com/flavio_gabrielll/",
    external: true,
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="section">
      <div className="wrap">
        <Reveal className="contact-hero">
          <p className="eyebrow mono" style={{ justifyContent: "center" }}>
            {t("contact.eyebrow")}
          </p>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.sub")}</p>
        </Reveal>

        <Reveal className="contact-cta">
          <a href="https://wa.me/5565999527412" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <IconWhatsapp />
            <span>{t("contact.ctaBtn")}</span>
          </a>
        </Reveal>

        <Reveal className="contact-grid">
          {CONTACT_LINKS.map(({ id, Icon, label, value, href, external }) => (
            <a
              key={id}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="contact-card"
            >
              <span className="ico">
                <Icon size={20} />
              </span>
              <p className="k mono">{label}</p>
              <p className="v">{value}</p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
