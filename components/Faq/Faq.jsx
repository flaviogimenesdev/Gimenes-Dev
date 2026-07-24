"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import "./Faq.css"

const FAQ_ITEMS = [
  { qKey: "faq.q1", aKey: "faq.a1", openByDefault: true },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
];

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section section-alt">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{t("faq.eyebrow")}</p>
          <h2>{t("faq.title")}</h2>
        </Reveal>

        <Reveal style={{ maxWidth: 760 }}>
          {FAQ_ITEMS.map((item) => (
            <details key={item.qKey} className="faq-item" open={item.openByDefault || undefined}>
              <summary>
                <span>{t(item.qKey)}</span>
                <span className="plus mono">+</span>
              </summary>
              <p className="faq-a">{t(item.aKey)}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
