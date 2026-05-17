"use client";

import { CountUp } from "@/components/effects/CountUp";
import { Container } from "@/components/shared/Container";
import { ShieldCheck, Plane, Globe, Users } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";
import { t } from "@/lib/i18n/translations";

export function Stats() {
  const { tr } = useLang();
  const items = [
    { value: 11000, suffix: "+", label: tr(t.sections.stats.pilgrims), Icon: ShieldCheck },
    { value: 60000, suffix: "+", label: tr(t.sections.stats.travel),   Icon: Users },
    { value: 90,    suffix: "+", label: tr(t.sections.stats.airlines), Icon: Plane },
    { value: 45,    suffix: "+", label: tr(t.sections.stats.countries),Icon: Globe }
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-800 to-emerald-800 py-16 text-white md:py-20">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, white 2px, transparent 2px), radial-gradient(circle at 70% 80%, white 1.5px, transparent 1.5px)",
          backgroundSize: "120px 120px, 80px 80px"
        }}
      />
      <Container>
        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ value, suffix, label, Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 size-7 text-emerald-300" />
              <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="mt-2 text-sm text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
