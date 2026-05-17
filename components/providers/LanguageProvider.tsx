"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Lang, Translatable } from "@/lib/i18n/translations";

type Ctx = {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggle: () => void;
  tr: (entry: Translatable | string | undefined) => string;
  switchHref: (target: Lang) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

function localeFromPath(pathname: string | null): Lang {
  if (!pathname) return "en";
  return pathname === "/bn" || pathname.startsWith("/bn/") ? "bn" : "en";
}

function switchPath(pathname: string | null, target: Lang): string {
  if (!pathname) return target === "bn" ? "/bn" : "/";
  const stripped = pathname.replace(/^\/bn(?=\/|$)/, "") || "/";
  if (target === "en") return stripped;
  return stripped === "/" ? "/bn" : `/bn${stripped}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const lang = localeFromPath(pathname);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "bn" ? "bn" : "en";
    }
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      router.push(switchPath(pathname, next));
    },
    [pathname, router]
  );

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "bn" : "en");
  }, [lang, setLang]);

  const tr = useCallback(
    (entry: Translatable | string | undefined) => {
      if (entry == null) return "";
      if (typeof entry === "string") return entry;
      return entry[lang] ?? entry.en ?? "";
    },
    [lang]
  );

  const switchHref = useCallback(
    (target: Lang) => switchPath(pathname, target),
    [pathname]
  );

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, toggle, tr, switchHref }),
    [lang, setLang, toggle, tr, switchHref]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en" as Lang,
      setLang: () => {},
      toggle: () => {},
      tr: (entry: Translatable | string | undefined) =>
        typeof entry === "string" ? entry : (entry?.en ?? ""),
      switchHref: () => "/"
    };
  }
  return ctx;
}

/**
 * Build a locale-aware href. If current locale is bn, prefix with /bn.
 */
export function useLocaleHref() {
  const { lang } = useLang();
  return useCallback(
    (href: string) => {
      if (lang === "en") return href;
      if (href === "/") return "/bn";
      if (href.startsWith("/bn")) return href;
      if (href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return href;
      return `/bn${href}`;
    },
    [lang]
  );
}
