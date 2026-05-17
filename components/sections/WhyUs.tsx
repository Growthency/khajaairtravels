"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Clock, Users, BadgeCheck, Headphones } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useLang } from "@/components/providers/LanguageProvider";
import { t } from "@/lib/i18n/translations";

export function WhyUs() {
  const { tr } = useLang();
  const reasons = [
    { icon: ShieldCheck, title: tr(t.sections.why.r1.t), body: tr(t.sections.why.r1.b) },
    { icon: BadgeCheck,  title: tr(t.sections.why.r2.t), body: tr(t.sections.why.r2.b) },
    { icon: Banknote,    title: tr(t.sections.why.r3.t), body: tr(t.sections.why.r3.b) },
    { icon: Clock,       title: tr(t.sections.why.r4.t), body: tr(t.sections.why.r4.b) },
    { icon: Users,       title: tr(t.sections.why.r5.t), body: tr(t.sections.why.r5.b) },
    { icon: Headphones,  title: tr(t.sections.why.r6.t), body: tr(t.sections.why.r6.b) }
  ];
  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          kicker={tr(t.sections.why.kicker)}
          title={
            <>
              {tr(t.sections.why.titleA)}{" "}
              <span className="gradient-text">{tr(t.sections.why.titleB)}</span>
            </>
          }
          subtitle={tr(t.sections.why.sub)}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-card"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-sky-700 transition-all group-hover:from-sky-200 group-hover:to-emerald-200">
                <r.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
