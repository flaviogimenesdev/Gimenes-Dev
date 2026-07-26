"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import { IconGithub, IconExternalLink } from "@/lib/icons";
import "./Demos.css"

const PROJECTS = [
  {
    id: "zerograu",
    name: "Zero Grau Motos",
    image: "/imgs/Prints/ZeroGrauPrint.png",
    alt: "Página inicial do site Zero Grau Motos",
    tagKey: "projects.tagWeb",
    descKey: "projects.p1.desc",
    tech: ["React", "Tailwind CSS", "Next.js"],
    live: "https://site-zero-grau-motos.vercel.app/",
  },
  {
    id: "nexus",
    name: "Nexus RPG",
    image: "/imgs/Prints/NexusPrint.png",
    alt: "Tela inicial do app educacional Nexus RPG",
    tagKey: "projects.tagMobile",
    descKey: "projects.p2.desc",
    tech: ["React Native", "Expo", "TypeScript", "Java"],
    live: "https://trabalho-univag-nexus.vercel.app/",
  },
  {
    id: "ayda",
    name: "Ayda",
    image: "/imgs/Prints/AydaPrint.png",
    alt: "Tela inicial do app Ayda para relatos urbanos",
    tagKey: "projects.tagMobile",
    descKey: "projects.p3.desc",
    tech: ["React", "JavaScript"],
    live: "https://flavingimenes.github.io/TrabalhoUnivagAyda/",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="section section-alt">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{t("projects.eyebrow")}</p>
          <h2>{t("projects.title")}</h2>
          <p>{t("projects.sub")}</p>
        </Reveal>

        <div className="grid-3">
          {PROJECTS.map((project) => (
            <Reveal as="article" key={project.id} className="card proj-card" style={{ padding: 0 }}>
              <div className="proj-shot">
                <img src={project.image} alt={project.alt} loading="lazy" width={1920} height={1080} />
                <span className="proj-tag">{t(project.tagKey)}</span>
              </div>

              <div className="proj-body">
                <h3>{project.name}</h3>
                <p>{t(project.descKey)}</p>

                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="proj-links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <IconExternalLink />
                    <span>{t("projects.visit")}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
