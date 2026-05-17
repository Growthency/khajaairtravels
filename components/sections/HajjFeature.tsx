"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, Plane, BedDouble, BookOpen, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/shared/Badge";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ParallaxFloater } from "@/components/effects/ParallaxFloater";
import { useLang, useLocaleHref } from "@/components/providers/LanguageProvider";
import { t } from "@/lib/i18n/translations";

export function HajjFeature() {
  const { tr } = useLang();
  const lh = useLocaleHref();
  const features = [
    { icon: ShieldCheck,    label: tr(t.sections.hajj.f1.l), desc: tr(t.sections.hajj.f1.d) },
    { icon: MapPin,         label: tr(t.sections.hajj.f2.l), desc: tr(t.sections.hajj.f2.d) },
    { icon: Plane,          label: tr(t.sections.hajj.f3.l), desc: tr(t.sections.hajj.f3.d) },
    { icon: BookOpen,       label: tr(t.sections.hajj.f4.l), desc: tr(t.sections.hajj.f4.d) },
    { icon: BedDouble,      label: tr(t.sections.hajj.f5.l), desc: tr(t.sections.hajj.f5.d) },
    { icon: HeartHandshake, label: tr(t.sections.hajj.f6.l), desc: tr(t.sections.hajj.f6.d) }
  ];

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-28">
      <GradientBlob color="emerald" size="xl" className="-left-40 -top-40" opacity={0.22} />
      <GradientBlob color="saffron" size="lg" className="-right-32 bottom-0" opacity={0.18} />
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge tone="emerald" className="bg-emerald-500/15 text-emerald-300 ring-emerald-400/30">
              {tr(t.sections.hajj.kicker)}
            </Badge>
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.08] tracking-tight md:text-[48px]">
              {tr(t.sections.hajj.titleA)}{" "}
              <span className="gradient-text-shimmer">{tr(t.sections.hajj.titleB)}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {tr(t.sections.hajj.sub)}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 place-items-center rounded-xl bg-emerald-500/20 text-emerald-300">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{label}</div>
                      <div className="mt-0.5 text-xs text-white/65">{desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={lh("/services/hajj-umrah")}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-glow hover:bg-emerald-50"
              >
                {tr(t.sections.hajj.ctaSee)}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={lh("/contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                {tr(t.sections.hajj.ctaBook)}
              </Link>
            </div>
          </div>

          <ParallaxFloater range={[40, -40]}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 rotate-2 rounded-[34px] bg-gradient-to-br from-emerald-500/30 to-saffron-500/30 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[34px] ring-1 ring-white/15">
                <Image
                  src="/images/hero/hajj-feature.webp"
                  alt={tr({ en: "Pilgrims at Masjid al-Haram performing Tawaf", bn: "মসজিদ আল-হারামে তাওয়াফরত হাজীরা" })}
                  fill
                  sizes="(min-width: 1024px) 400px, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {tr(t.sections.hajj.tagSeason)}
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-white">
                    {tr(t.sections.hajj.tagOpen)}
                  </div>
                  <div className="mt-1 text-sm text-white/75">
                    {tr(t.sections.hajj.tagDist)}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rotate-[-6deg] rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-2xl backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {tr(t.sections.hajj.tagPil)}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">{tr(t.sections.hajj.tagSince)}</div>
              </div>
              <div className="absolute -right-6 -top-6 rotate-[6deg] rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-2xl backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-300">
                  {tr(t.sections.hajj.tagMu)}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">{tr(t.sections.hajj.tagGroup)}</div>
              </div>
            </div>
          </ParallaxFloater>
        </div>
      </Container>
    </section>
  );
}
