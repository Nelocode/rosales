"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dictionary, Locale } from "@/lib/dictionary";

type LanguageContextType = {
  lang: Locale;
  t: typeof dictionary.en;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
