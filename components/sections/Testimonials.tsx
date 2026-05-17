"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Container } from "@/components/shared/Container";
import { useLang } from "@/components/providers/LanguageProvider";
import { useTestimonials } from "@/lib/i18n/data";
import { t } from "@/lib/i18n/translations";

export function Testimonials() {
  const { tr } = useLang();
  const testimonials = useTestimonials();
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const cur = testimonials[i % total] ?? testimonials[0];
  const go = (delta: number) => setI((prev) => (prev + delta + total) % total);

  return (
    <section className="section-pad bg-paper-2">
      <Container>
        <SectionHeader
          kicker={tr(t.sections.testimonials.kicker)}
          title={
            <>
              <span className="gradient-text">{tr(t.sections.testimonials.titleA)}</span>{" "}
              {tr(t.sections.testimonials.titleB)}
            </>
          }
          subtitle={tr(t.sections.testimonials.sub)}
          tone="emerald"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative rounded-3xl border border-border bg-white p-7 shadow-card md:p-10">
            <Quote className="absolute -top-5 left-6 size-9 text-emerald-500/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: cur.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-saffron-500 text-saffron-500" />
                  ))}
                </div>
                <p className="mt-5 font-display text-lg leading-relaxed text-ink md:text-xl">
                  "{cur.quote}"
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-ink">{cur.name}</div>
                    <div className="text-sm text-ink-muted">
                      {cur.role} · {cur.city}
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200/70">
                    {cur.service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              aria-label={tr(t.sections.testimonials.prev)}
              onClick={() => go(-1)}
              className="grid size-10 place-items-center rounded-full border border-border bg-white text-ink hover:border-sky-500 hover:text-sky-700"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  aria-label={`${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-emerald-600" : "w-3 bg-ink/15 hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label={tr(t.sections.testimonials.next)}
              onClick={() => go(1)}
              className="grid size-10 place-items-center rounded-full border border-border bg-white text-ink hover:border-sky-500 hover:text-sky-700"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
