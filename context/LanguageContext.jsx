"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/translations";

const STORAGE_KEY = "fg_lang";
const SUPPORTED = ["pt", "en"];

const LanguageContext = createContext(null);

function detectInitialLang() {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  const browserLang = (navigator.language || "pt").toLowerCase();
  return browserLang.startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }) {
  // Renderiza em "pt" no servidor; ajusta para o idioma real assim que montar no cliente.
  const [lang, setLangState] = useState("pt");

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.pt;
      return dict[key] ?? key;
    },
    [lang]
  );

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage precisa ser usado dentro de um <LanguageProvider>");
  }
  return ctx;
}
