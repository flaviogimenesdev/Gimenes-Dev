"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations/index"

/**
 * Efeito de "digitação" estilo terminal — o elemento de assinatura
 * visual do hero, alternando frases curtas sobre o serviço prestado.
 */
export default function Typewriter() {
  const { lang } = useLanguage();
  const [text, setText] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    const phrases = translations[lang]?.typewriter || [];
    if (!phrases.length) return undefined;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          timerRef.current = setTimeout(tick, 1800);
          return;
        }
        timerRef.current = setTimeout(tick, 55);
      } else {
        charIndex -= 1;
        setText(phrase.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timerRef.current = setTimeout(tick, 400);
          return;
        }
        timerRef.current = setTimeout(tick, 28);
      }
    }

    tick();
    return () => clearTimeout(timerRef.current);
  }, [lang]);

  return (
    <p className="type-line">
      <span>{text}</span>
      <span className="cursor" aria-hidden="true"></span>
    </p>
  );
}
