"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import "./Testimonials.css"

const TESTIMONIALS = [
  { id: "t1", avatar: "C1", quoteKey: "testi.q1", nameKey: "testi.n1", roleKey: "testi.r1" },
  { id: "t2", avatar: "C2", quoteKey: "testi.q2", nameKey: "testi.n2", roleKey: "testi.r2" },
  { id: "t3", avatar: "C3", quoteKey: "testi.q3", nameKey: "testi.n3", roleKey: "testi.r3" },
];

// Substitua o conteúdo do array TESTIMONIALS acima e as chaves testi.q/n/r
// em lib/translations.js pelos depoimentos reais assim que estiverem disponíveis.
export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="depoimentos" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{t("testi.eyebrow")}</p>
          <h2>{t("testi.title")}</h2>
          <p>{t("testi.sub")}</p>
        </Reveal>

        <div className="grid-3">
          {TESTIMONIALS.map((item) => (
            <Reveal key={item.id} className="testi-card">
              <span className="testi-flag mono">{t("testi.flag")}</span>
              <p className="testi-quote">{t(item.quoteKey)}</p>
              <div className="testi-person">
                <div className="testi-avatar">{item.avatar}</div>
                <div>
                  <p className="name">{t(item.nameKey)}</p>
                  <p className="role">{t(item.roleKey)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
