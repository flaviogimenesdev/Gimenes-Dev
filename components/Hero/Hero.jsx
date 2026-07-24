"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import Typewriter from "../Typewriter/Typewriter";
import "./Hero.css"

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow mono">{t("hero.eyebrow")}</p>

          <h1 className="hero-title">
            {t("hero.titleMain")} <span className="accent">{t("hero.titleAccent")}</span>
          </h1>

          <p className="hero-sub">{t("hero.sub")}</p>

          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              {t("hero.ctaPrimary")}
            </a>
            <a href="#projetos" className="btn btn-outline">
              {t("hero.ctaSecondary")}
            </a>
          </div>

          <div className="trust-line">
            <span>{t("hero.trust1")}</span>
            <span>{t("hero.trust2")}</span>
            <span>{t("hero.trust3")}</span>
          </div>
        </div>

        <div>
          <Reveal className="mockup">
            <div className="mockup-bar">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="url mono">flaviogimenes.com</div>
            </div>
            <div className="mockup-body">
              <img
                src="/imgs/Prints/ZeroGrauPrint.png"
                alt="Print do site Zero Grau Motos, projeto de Flávio Gimenes"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <img
                src="/imgs/Prints/NexusPrint.png"
                alt="Print do app Nexus RPG, projeto de Flávio Gimenes"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <img
                src="/imgs/Prints/AydaPrint.png"
                alt="Print do app Ayda, projeto de Flávio Gimenes"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
          </Reveal>
          <Typewriter />
        </div>
      </div>
    </section>
  );
}
