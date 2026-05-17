"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { useLang, useLocaleHref } from "@/components/providers/LanguageProvider";
import { useServices } from "@/lib/i18n/data";
import { t } from "@/lib/i18n/translations";

const tones = {
  sky: {
    ring: "ring-sky-200/70",
    bg: "from-sky-50 via-white to-white",
    badge: "bg-sky-100 text-sky-700",
    arrow: "text-sky-700 group-hover:bg-sky-600 group-hover:text-white",
    bar: "from-sky-500 to-sky-700"
  },
  emerald: {
    ring: "ring-emerald-200/70",
    bg: "from-emerald-50 via-white to-white",
    badge: "bg-emerald-100 text-emerald-700",
    arrow: "text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    bar: "from-emerald-500 to-emerald-700"
  },
  saffron: {
    ring: "ring-saffron-200/70",
    bg: "from-saffron-50 via-white to-white",
    badge: "bg-saffron-100 text-saffron-700",
    arrow: "text-saffron-700 group-hover:bg-saffron-600 group-hover:text-white",
    bar: "from-saffron-500 to-saffron-600"
  }
} as const;

export function ServicesGrid() {
  const { tr } = useLang();
  const lh = useLocaleHref();
  const services = useServices();

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-soft [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]" />
      <Container>
        <SectionHeader
          kicker={tr(t.sections.services.kicker)}
          title={
            <>
              {tr(t.sections.services.titleA)}{" "}
              <span className="gradient-text">{tr(t.sections.services.titleB)}</span>
            </>
          }
          subtitle={tr(t.sections.services.sub)}
          tone="emerald"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const tone = tones[s.accent];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl bg-gradient-to-br p-7 ring-1 ring-inset transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                  tone.bg,
                  tone.ring
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", tone.bar)} />
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-white shadow-sm text-3xl">
                    {s.icon}
                  </div>
                  <Link
                    href={lh(`/services/${s.slug}`)}
                    aria-label={s.title}
                    className={cn(
                      "grid size-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-inset ring-border transition-all duration-300",
                      tone.arrow
                    )}
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.short}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className={cn("mt-0.5 grid size-4 shrink-0 place-items-center rounded-full", tone.badge)}>
                        <Check className="size-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
