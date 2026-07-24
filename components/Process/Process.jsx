"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import "./Process.css"

const STEPS = [
  { num: "01", titleKey: "process.s1.title", descKey: "process.s1.desc" },
  { num: "02", titleKey: "process.s2.title", descKey: "process.s2.desc" },
  { num: "03", titleKey: "process.s3.title", descKey: "process.s3.desc" },
  { num: "04", titleKey: "process.s4.title", descKey: "process.s4.desc" },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="processo" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{t("process.eyebrow")}</p>
          <h2>{t("process.title")}</h2>
          <p>{t("process.sub")}</p>
        </Reveal>

        <Reveal className="process-list">
          {STEPS.map((step) => (
            <div className="process-item" key={step.num}>
              <span className="num mono">{step.num}</span>
              <h3>{t(step.titleKey)}</h3>
              <p>{t(step.descKey)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
