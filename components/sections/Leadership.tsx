"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useLang } from "@/components/providers/LanguageProvider";
import { useLeadership } from "@/lib/i18n/data";
import { t } from "@/lib/i18n/translations";

export function Leadership({ compact = false }: { compact?: boolean }) {
  const { tr } = useLang();
  const leaders = useLeadership();

  return (
    <section className={compact ? "section-pad bg-paper-2" : "section-pad"}>
      <Container>
        <SectionHeader
          kicker={tr(t.sections.leadership.kicker)}
          title={
            <>
              {tr(t.sections.leadership.titleA)}{" "}
              <span className="gradient-text">{tr(t.sections.leadership.titleB)}</span>
            </>
          }
          subtitle={tr(t.sections.leadership.sub)}
          tone="sky"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => (
            <motion.figure
              key={leader.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={`${leader.name} — ${leader.role}`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-5">
                  <figcaption>
                    <div className="font-display text-lg font-bold text-white">{leader.name}</div>
                    <div className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      {leader.role}
                    </div>
                  </figcaption>
                </div>
              </div>
              {!compact && (
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-ink-muted">{leader.bio}</p>
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
