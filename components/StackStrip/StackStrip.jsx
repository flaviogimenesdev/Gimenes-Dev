"use client";

import { useLanguage } from "@/context/LanguageContext";
import "./StackStrip.css"

const STACK = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "React Native"];

export default function StackStrip() {
  const { t } = useLanguage();

  return (
    <div className="stack-strip">
      <div className="wrap">
        <span className="label mono">{t("stack.label")}</span>
        {STACK.map((item) => (
          <span key={item} className="stack-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
