"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { Lang, Translatable } from "@/lib/i18n/translations";

type Ctx = {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggle: () => void;
  tr: (entry: Translatable) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "kat-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "bn") {
        setLangState(stored);
        document.documentElement.lang = stored === "bn" ? "bn" : "en";
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next === "bn" ? "bn" : "en";
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "bn" : "en");
  }, [lang, setLang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle,
      tr: (entry) => (entry?.[lang] ?? entry?.en ?? "")
    }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      <span suppressHydrationWarning data-hydrated={hydrated ? "yes" : "no"} className="hidden" />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en" as Lang,
      setLang: () => {},
      toggle: () => {},
      tr: (entry: Translatable) => entry?.en ?? ""
    };
  }
  return ctx;
}
