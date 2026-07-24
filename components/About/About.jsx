"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import "./Abouts.css"

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="section section-alt">
      <div className="wrap about-grid">
        <Reveal className="about-photo">
          <img src="/imgs/FlavioIcon.png" alt="Ícone ilustrado de Flávio Gimenes" loading="lazy" width={256} height={256} />
        </Reveal>

        <Reveal className="about-text">
          <p className="eyebrow mono">{t("about.eyebrow")}</p>
          <h2 style={{ marginBottom: 18 }}>{t("about.title")}</h2>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>

          <div className="info-grid">
            <div className="info-card">
              <p className="k mono">{t("about.locK")}</p>
              <p className="v">{t("about.locV")}</p>
            </div>
            <div className="info-card">
              <p className="k mono">{t("about.focusK")}</p>
              <p className="v">{t("about.focusV")}</p>
            </div>
            <div className="info-card">
              <p className="k mono">{t("about.statusK")}</p>
              <p className="v">{t("about.statusV")}</p>
            </div>
            <div className="info-card">
              <p className="k mono">LinkedIn</p>
              <a className="v" href="https://www.linkedin.com/in/flaviogimeness" target="_blank" rel="noopener noreferrer">
                /in/flaviogimeness
              </a>
            </div>
          </div>

          <a
            href="mailto:gflavio581@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20curr%C3%ADculo"
            className="btn btn-outline"
          >
            {t("about.resume")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
