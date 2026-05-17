"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck2, Plane, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useLang } from "@/components/providers/LanguageProvider";
import { t } from "@/lib/i18n/translations";

export function Process() {
  const { tr } = useLang();
  const steps = [
    { icon: MessageSquare, label: tr(t.sections.process.s1l), title: tr(t.sections.process.s1t), body: tr(t.sections.process.s1b) },
    { icon: FileCheck2,    label: tr(t.sections.process.s2l), title: tr(t.sections.process.s2t), body: tr(t.sections.process.s2b) },
    { icon: Plane,         label: tr(t.sections.process.s3l), title: tr(t.sections.process.s3t), body: tr(t.sections.process.s3b) },
    { icon: HeartHandshake,label: tr(t.sections.process.s4l), title: tr(t.sections.process.s4t), body: tr(t.sections.process.s4b) }
  ];

  return (
    <section className="section-pad relative overflow-hidden">
      <Container>
        <SectionHeader
          kicker={tr(t.sections.process.kicker)}
          title={
            <>
              {tr(t.sections.process.titleA)}{" "}
              <span className="gradient-text">{tr(t.sections.process.titleB)}</span>
            </>
          }
          subtitle={tr(t.sections.process.sub)}
          tone="sky"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative rounded-3xl border border-border bg-white p-7"
              >
                <div className="absolute -top-5 left-7 grid size-10 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-600 text-sm font-bold text-white shadow-glow">
                  0{i + 1}
                </div>
                <div className="grid size-12 place-items-center rounded-2xl bg-paper-2 text-sky-700">
                  <Icon className="size-5" />
                </div>
                <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-700">
                  {s.label}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                {i < steps.length - 1 && (
                  <div aria-hidden="true" className="absolute right-[-24px] top-1/2 hidden h-px w-12 bg-gradient-to-r from-sky-300 to-transparent lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
