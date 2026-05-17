"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { WA } from "@/lib/utils";
import { GradientBlob } from "@/components/effects/GradientBlob";

export function CtaBand() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink text-white">
      <GradientBlob color="sky" size="xl" className="-left-32 -top-24" opacity={0.28} />
      <GradientBlob color="emerald" size="lg" className="-right-32 bottom-0" opacity={0.22} />
      <GradientBlob color="saffron" size="md" className="left-1/2 top-1/2" opacity={0.18} />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
            Ready when you are
          </p>
          <h2 className="mt-4 font-display text-[34px] font-bold leading-tight tracking-tight md:text-5xl">
            One conversation. One trusted partner. <br className="hidden md:block" />
            <span className="gradient-text-shimmer">A lifetime of journeys.</span>
          </h2>
          <p className="mt-5 text-base text-white/75 md:text-lg">
            Walk into our Uttara office, call us, or just say "Assalamu Alaikum" on WhatsApp. We will take it from there.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-emerald-600 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="size-4" />
              WhatsApp our desk
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              Visit our office
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
