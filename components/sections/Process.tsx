"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck2, Plane, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: MessageSquare,
    label: "Talk",
    title: "Tell us what you need",
    body: "Walk into our Uttara office, call us or WhatsApp. We listen first, ask about your dates, budget and preferences."
  },
  {
    icon: FileCheck2,
    label: "Plan",
    title: "We design and quote",
    body: "Within 24 hours you get a clear, itemised quote — no hidden fees. We hold flights and rooms for 72 hours at no cost."
  },
  {
    icon: Plane,
    label: "Travel",
    title: "We handle every detail",
    body: "Visa, ticket, hotel, transport, guide — issued and confirmed. You receive printed itineraries the day before departure."
  },
  {
    icon: HeartHandshake,
    label: "Aftercare",
    title: "Khedmat continues",
    body: "From WhatsApp support on the trip to a post-Hajj follow up call, we stay in touch. Many of our pilgrims become friends."
  }
];

export function Process() {
  return (
    <section className="section-pad relative overflow-hidden">
      <Container>
        <SectionHeader
          kicker="How we work"
          title={
            <>
              Four simple steps. <span className="gradient-text">Zero stress.</span>
            </>
          }
          subtitle="We refuse to make booking a trip feel like a paperwork war. Here is what working with us actually looks like."
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
                  <div
                    aria-hidden="true"
                    className="absolute right-[-24px] top-1/2 hidden h-px w-12 bg-gradient-to-r from-sky-300 to-transparent lg:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
