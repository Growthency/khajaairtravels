import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerGroup, staggerItem } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { branches } from "@/lib/data/branches";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Khaja Air Travels — 20 years of khedmat",
  description:
    "Founded by Amdadul Haque Mir in 2003 in Cumilla. Today, a Government Approved Hajj agency (Licence No-0252) with a four-company group spanning travel, manpower, housing and food."
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty over upsell",
    body: "Every invoice is itemised. Every package matches what we promised at the counter. We would rather lose a booking than cut a corner."
  },
  {
    icon: HeartHandshake,
    title: "Khedmat over transaction",
    body: "A Hajj client is not a booking number — they are someone's father, mother, spouse. We serve them the way we would serve our own."
  },
  {
    icon: Sparkles,
    title: "Local language, global standard",
    body: "Bangla from the front desk to the Mu'allim in Mina. Service standards from the world's most demanding airlines."
  },
  {
    icon: Compass,
    title: "Long-term relationships",
    body: "Many of our clients have booked with us for fifteen years. Three generations of one family have flown through this office."
  }
];

const milestones = [
  { year: "2003", title: "Founded in Cumilla", body: "Mr. Amdadul Haque Mir opens a single-desk travel office, primarily for Umrah and ticketing." },
  { year: "2008", title: "Opened the Uttara office", body: "Demand from Dhaka pushes us to establish a full corporate office in Uttara Sector 7." },
  { year: "2009", title: "Awarded Hajj Licence No-0252", body: "Recognised by the Ministry of Religious Affairs to lead pilgrim groups every season." },
  { year: "2011", title: "Shahi Air International begins", body: "A separate desk for ethical manpower export — quickly becomes a sister concern." },
  { year: "2016", title: "Chandina Village Housing Ltd.", body: "Founder enters land development with a project for migrant-worker families in Chandina, Cumilla." },
  { year: "2019", title: "Abibil Trading Food Products Ltd.", body: "Branches into pantry essentials — rice, lentils, ghee, dates — under the Abibil brand." },
  { year: "2024", title: "11,000+ pilgrims served", body: "The cumulative count of pilgrims passing through Khaja Air Travels crosses eleven thousand." }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title={
          <>
            Twenty years of <span className="gradient-text">khedmat</span> to Bangladesh travellers.
          </>
        }
        subtitle="What began in 2003 as a small ticketing desk in Cumilla today serves more than 5,000 travellers a year, leads over 200 pilgrims for every Hajj season, and runs a four-company family spanning travel, manpower, housing and food."
        tone="emerald"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Visit our office
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-sky-500 hover:text-sky-700"
          >
            Meet our group companies
          </Link>
        </div>
      </PageHero>

      <section className="section-pad">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                  Our story
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-[40px]">
                  From a Cumilla courtyard to <span className="gradient-text">eleven thousand pilgrims.</span>
                </h2>
              </Reveal>
              <div className="prose prose-lg mt-6 max-w-none text-ink-muted">
                <p>
                  In the early years, the agency was just a steel almirah, a single desk and an Amadeus terminal. Mr. {SITE.proprietor} would ride to the airport himself to pick up tickets, sit with clients over tea to explain the difference between a Hajj agency and a tour operator, and walk through document checklists line by line.
                </p>
                <p>
                  Two decades on, the model has not changed — only the scale has. We still believe the most important moment of any travel relationship is the first conversation. Our team still picks up the phone. Our Mu'allim still walks every group through Manasik in person before departure.
                </p>
                <p>
                  Along the way, the founder's other businesses — Shahi Air International for manpower export, Chandina Village Housing for planned residential plots and Abibil Trading for honest food — have grown alongside the travel agency. They share staff, share principles, and share one phone line you can pick up at any hour.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Reveal y={36}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-border">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                    alt="Khaja Air Travels team at the Uttara office"
                    fill
                    sizes="(min-width:1024px) 400px, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6 text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      Founder
                    </div>
                    <div className="mt-1 font-display text-2xl font-bold">{SITE.proprietor}</div>
                    <div className="mt-0.5 text-sm text-white/80">Proprietor, Khaja Air Travels</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-paper-2">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-700">
                Our values
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-[40px]">
                Four words that <span className="gradient-text">shape every booking</span>.
              </h2>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="h-full rounded-3xl border border-border bg-white p-6">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 text-sky-700">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-saffron-700">
                The journey
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-[40px]">
                Two decades, milestone by milestone.
              </h2>
            </div>
          </Reveal>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-emerald-300 to-saffron-300 md:left-1/2 md:block"
            />
            <ol className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.05}>
                  <li
                    className={`relative grid md:grid-cols-2 md:gap-8 ${
                      i % 2 === 0 ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    <div className="md:[direction:ltr]">
                      <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                        <div className="font-display text-3xl font-bold text-sky-700">{m.year}</div>
                        <div className="mt-1 font-semibold text-ink">{m.title}</div>
                        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{m.body}</p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-2 top-7 hidden size-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 ring-4 ring-white md:left-1/2 md:block" />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <Stats />

      <section className="section-pad">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                Our group of companies
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-[40px]">
                Four houses. <span className="gradient-text">One family.</span>
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                Khaja Air Travels is the flagship. Around it sit three sister concerns founded by the same family, each in a sector close to our roots.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {branches.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.06}>
                <Link
                  href={`/branches/${b.slug}`}
                  className="group block h-full rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-paper-2 text-sky-700">
                    <Building2 className="size-5" />
                  </div>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted">
                    Est. {b.established}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-ink-muted">{b.role}</p>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-3">{b.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 group-hover:text-sky-800">
                    Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
