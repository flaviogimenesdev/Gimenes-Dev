"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import { IconBolt, IconBuilding, IconMobile, IconLayout, IconShield, IconLayers } from "@/lib/icons";

const SERVICES = [
  { id: "s1", Icon: IconBolt, titleKey: "services.s1.title", descKey: "services.s1.desc", featured: true },
  { id: "s2", Icon: IconBuilding, titleKey: "services.s2.title", descKey: "services.s2.desc" },
  { id: "s3", Icon: IconMobile, titleKey: "services.s3.title", descKey: "services.s3.desc" },
  { id: "s4", Icon: IconLayout, titleKey: "services.s4.title", descKey: "services.s4.desc" },
  { id: "s5", Icon: IconShield, titleKey: "services.s5.title", descKey: "services.s5.desc" },
  { id: "s6", Icon: IconLayers, titleKey: "services.s6.title", descKey: "services.s6.desc" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{t("services.eyebrow")}</p>
          <h2>{t("services.title")}</h2>
          <p>{t("services.sub")}</p>
        </Reveal>

        <div className="grid-3">
          {SERVICES.map(({ id, Icon, titleKey, descKey, featured }) => (
            <Reveal key={id} className={`card${featured ? " featured" : ""}`}>
              {featured && <span className="badge">{t("services.badge")}</span>}
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{t(titleKey)}</h3>
              <p className="card-desc">{t(descKey)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
