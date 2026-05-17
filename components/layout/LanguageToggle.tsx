"use client";

import { useLang } from "@/components/providers/LanguageProvider";
import { LANGS } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/80 p-0.5 text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur",
        className
      )}
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={`Switch to ${l.full}`}
            className={cn(
              "rounded-full px-2.5 py-1.5 transition-colors",
              active
                ? "bg-ink text-white shadow-[0_4px_12px_-4px_rgba(10,20,38,0.45)]"
                : "text-ink-muted hover:text-ink"
            )}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
