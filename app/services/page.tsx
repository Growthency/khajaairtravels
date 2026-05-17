import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services — Hajj, Umrah, Air Tickets, Visa, Tours, Hotels",
  description:
    "Five desks under one roof — Hajj & Umrah, Air Ticketing, Visa Processing, Tour Packages and Hotel Booking. Government Approved Hajj Agency Licence No-0252."
};

const accents = {
  sky: "from-sky-50 to-white ring-sky-200",
  emerald: "from-emerald-50 to-white ring-emerald-200",
  saffron: "from-saffron-50 to-white ring-saffron-200"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title={
          <>
            Five desks. <span className="gradient-text">One promise.</span>
          </>
        }
        subtitle="Each of our five service desks runs as a focused, expert team — but they share information freely so your file moves quickly between Hajj, ticketing, visa, hotel and tour without retelling your story three times."
        tone="sky"
      />

      <section className="section-pad">
        <Container>
          <div className="space-y-8">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <article
                  className={cn(
                    "grid gap-8 rounded-3xl bg-gradient-to-br p-7 ring-1 ring-inset md:grid-cols-12 md:p-10",
                    accents[s.accent]
                  )}
                >
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl bg-white shadow-sm text-2xl">
                        {s.icon}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
                        Desk 0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold text-ink md:text-[34px]">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-ink-muted md:text-lg">
                      {s.intro}
                    </p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink-soft"
                    >
                      Full {s.title.toLowerCase()} details
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border">
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                        Highlights
                      </div>
                      <ul className="mt-4 space-y-3">
                        {s.highlights.slice(0, 5).map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                            <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                              <Check className="size-3" />
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
