import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { languages, translations, type Dictionary, type Language } from "@/i18n/translations";

const STORAGE_KEY = "language";
export const DEFAULT_LANGUAGE: Language = "pt";

export function parseLanguage(value: string | null | undefined): Language {
  return value === "en" || value === "pt" ? value : DEFAULT_LANGUAGE;
}

type LanguageContextValue = { language: Language; t: Dictionary; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server and first client render use the default; the saved choice applies after hydration.
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    try {
      setLanguageState(parseLanguage(window.localStorage.getItem(STORAGE_KEY)));
    } catch {
      /* storage unavailable: keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = languages.find((item) => item.code === language)?.htmlLang ?? "pt-BR";
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ language, t: translations[language], setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Fallback keeps the page rendering if the provider is briefly missing (e.g. during hot reload).
  return context ?? { language: DEFAULT_LANGUAGE, t: translations[DEFAULT_LANGUAGE], setLanguage: () => {} };
}
