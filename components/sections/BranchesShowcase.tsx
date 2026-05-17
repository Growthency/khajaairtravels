"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { useLang, useLocaleHref } from "@/components/providers/LanguageProvider";
import { useBranches } from "@/lib/i18n/data";
import { t } from "@/lib/i18n/translations";

const tones = {
  sky: "from-sky-500 to-sky-700",
  emerald: "from-emerald-500 to-emerald-700",
  saffron: "from-saffron-500 to-saffron-600"
} as const;

export function BranchesShowcase() {
  const { tr } = useLang();
  const lh = useLocaleHref();
  const branches = useBranches();

  return (
    <section className="section-pad bg-paper-2">
      <Container>
        <SectionHeader
          kicker={tr(t.sections.branches.kicker)}
          title={
            <>
              {tr(t.sections.branches.titleA)}{" "}
              <span className="gradient-text">{tr(t.sections.branches.titleB)}</span>
            </>
          }
          subtitle={tr(t.sections.branches.sub)}
          tone="saffron"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {branches.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", tones[b.accent])} />
              <div className="flex items-center justify-between">
                <div className={cn("grid size-12 place-items-center rounded-xl bg-gradient-to-br text-white", tones[b.accent])}>
                  <Building2 className="size-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-ink-muted">
                  {tr(t.sections.branches.estd)} {b.established}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink leading-snug">{b.title}</h3>
              <p className="mt-1 text-xs font-semibold text-ink-muted">{b.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">{b.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {b.sectors.slice(0, 2).map((sec) => (
                  <span key={sec} className="rounded-full bg-paper-2 px-2.5 py-1 text-[11px] font-medium text-ink-soft ring-1 ring-inset ring-border">
                    {sec}
                  </span>
                ))}
              </div>
              <Link
                href={lh(`/branches/${b.slug}`)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 group-hover:text-sky-800"
              >
                {tr(t.sections.branches.explore)}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
