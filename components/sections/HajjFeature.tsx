"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, Plane, BedDouble, BookOpen, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/shared/Badge";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ParallaxFloater } from "@/components/effects/ParallaxFloater";

const features = [
  { icon: ShieldCheck, label: "Govt. approved", desc: "Hajj Licence No-0252 from MoRA" },
  { icon: MapPin, label: "Hotels near Haram", desc: "250m – 900m from Bab Marwah / Bab Fahd" },
  { icon: Plane, label: "Direct flights", desc: "Biman, Saudia, Flynas — preferred routing" },
  { icon: BookOpen, label: "Bangla Mu'allim", desc: "Daily orientation, Hajj manasik in Bangla" },
  { icon: BedDouble, label: "Mina Maktab", desc: "Reserved early to secure better tents" },
  { icon: HeartHandshake, label: "Family khedmat", desc: "Single point of contact for the journey" }
];

export function HajjFeature() {
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
              Our Flagship Service
            </Badge>
            <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.08] tracking-tight md:text-[48px]">
              Hajj &amp; Umrah, performed the way <span className="gradient-text-shimmer">it should be</span>.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              From the day you bring your passport to our Uttara office to the day you return home with a Hajj certificate in your hand, every step is planned, every cost is itemised, and a Bangla-speaking khadem stays with the group through every ritual.
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
                href="/services/hajj-umrah"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-glow hover:bg-emerald-50"
              >
                See full Hajj &amp; Umrah package
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Book a free consultation
              </Link>
            </div>
          </div>

          <ParallaxFloater range={[40, -40]}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 rotate-2 rounded-[34px] bg-gradient-to-br from-emerald-500/30 to-saffron-500/30 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[34px] ring-1 ring-white/15">
                <Image
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1100&q=80"
                  alt="Pilgrims at Masjid al-Haram performing Tawaf"
                  fill
                  sizes="(min-width: 1024px) 400px, 80vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Hajj 1447 H
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-white">
                    Quota now open
                  </div>
                  <div className="mt-1 text-sm text-white/75">
                    Hotel within 280m of Bab Marwah, direct Biman flight.
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rotate-[-6deg] rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-2xl backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  11,000+ pilgrims
                </div>
                <div className="mt-1 text-sm font-semibold text-white">since 2003</div>
              </div>
              <div className="absolute -right-6 -top-6 rotate-[6deg] rounded-2xl border border-white/15 bg-ink/80 p-4 shadow-2xl backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-300">
                  Bangla Mu'allim
                </div>
                <div className="mt-1 text-sm font-semibold text-white">on every group</div>
              </div>
            </div>
          </ParallaxFloater>
        </div>
      </Container>
    </section>
  );
}
