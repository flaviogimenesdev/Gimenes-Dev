"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import "./Abouts.css"

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="section">
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
              <p className="k mono">{t("about.focusK")}</p>
              <p className="v">{t("about.focusV")}</p>
            </div>
            <div className="info-card">
              <p className="k mono">{t("about.statusK")}</p>
              <p className="v">{t("about.statusV")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
