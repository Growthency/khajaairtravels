"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, Plane, ShieldCheck, Sparkles } from "lucide-react";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { TypeWriter } from "@/components/effects/TypeWriter";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { GlobeOrbit } from "@/components/effects/GlobeOrbit";
import { WA, SITE } from "@/lib/utils";

const floatingCards = [
  {
    id: "hajj",
    label: "Hajj 2026",
    sub: "Quota open",
    icon: "🕋",
    color: "#059669",
    rotate: -6,
    x: "0%",
    y: "6%"
  },
  {
    id: "tickets",
    label: "Air Ticket",
    sub: "90+ airlines",
    icon: "✈️",
    color: "#1f72e3",
    rotate: 4,
    x: "62%",
    y: "0%"
  },
  {
    id: "visa",
    label: "Visa Help",
    sub: "Saudi · UAE · Schengen",
    icon: "📘",
    color: "#f96e09",
    rotate: -3,
    x: "6%",
    y: "62%"
  },
  {
    id: "hotel",
    label: "Hotel near Haram",
    sub: "300+ properties",
    icon: "🏨",
    color: "#1c5dd0",
    rotate: 5,
    x: "58%",
    y: "66%"
  }
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-paper noise"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-10 bg-mesh-aurora opacity-90" aria-hidden="true" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <GradientBlob color="sky" size="xl" className="-top-40 -left-40" opacity={0.18} />
      <GradientBlob color="emerald" size="lg" className="top-1/4 right-0" opacity={0.16} />
      <GradientBlob color="saffron" size="md" className="bottom-0 left-1/3" opacity={0.16} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-40">
        <motion.div style={{ y, opacity }} className="relative z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 backdrop-blur"
          >
            <ShieldCheck className="size-4" />
            Govt. Approved Hajj Agency — Licence No-{SITE.licence}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 font-display text-[42px] leading-[1.02] font-bold tracking-tight text-ink text-balance md:text-[64px] lg:text-[72px]"
          >
            Your journey to the <span className="gradient-text-shimmer">Haramain</span>
            <br />
            <span className="text-ink">begins with </span>
            <TypeWriter
              words={["Khaja Air", "khedmat", "trust", "tomar bondhu"]}
              className="gradient-text"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Two decades. Eleven thousand pilgrims to the Haramain. Sixty thousand travellers across the world. Whether it is Hajj, Umrah, a confirmed air ticket or a family holiday in Kashmir — we walk with you from the first call to the moment you are back home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton>
              <Link
                href="/services/hajj-umrah"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(5,150,105,0.7)] hover:bg-emerald-700 hover:-translate-y-0.5 transition-all"
              >
                Plan my Hajj / Umrah
                <ArrowRight className="size-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href={WA.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-ink/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink hover:border-emerald-500 hover:text-emerald-700 transition-all backdrop-blur"
              >
                <MessageCircle className="size-4" />
                WhatsApp our desk
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-ink/10 pt-7"
          >
            {[
              { value: "20+", label: "Years of khedmat", Icon: Sparkles },
              { value: "11k+", label: "Hajj pilgrims served", Icon: ShieldCheck },
              { value: "90+", label: "Airlines on offer", Icon: Plane }
            ].map(({ value, label, Icon }) => (
              <div key={label} className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-bold text-sky-700">{value}</span>
                  <Icon className="size-3.5 text-emerald-600" />
                </div>
                <div className="mt-1 text-xs text-ink-muted">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden h-[520px] lg:col-span-5 lg:block"
        >
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.id}
              className="absolute z-10 rounded-2xl border border-border bg-white/95 p-4 shadow-card backdrop-blur"
              style={{ left: card.x, top: card.y, rotate: card.rotate, width: 180 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.35 + i * 0.1 },
                y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div
                className="mb-2 grid size-11 place-items-center rounded-xl text-xl"
                style={{ backgroundColor: card.color + "18" }}
              >
                {card.icon}
              </div>
              <p className="text-sm font-semibold text-ink">{card.label}</p>
              <p className="mt-0.5 text-xs text-ink-muted">{card.sub}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                style={{ background: card.color }}
              />
            </motion.div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <GlobeOrbit size={420} />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
          Scroll
        </span>
        <ChevronDown className="size-4 text-ink-muted" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-paper" />
    </section>
  );
}
