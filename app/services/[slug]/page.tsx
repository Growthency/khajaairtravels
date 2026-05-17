import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { services, getService } from "@/lib/data/services";
import { SITE, WA, cn } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.slug);
  if (!s) return { title: "Service not found" };
  return { title: s.meta.title, description: s.meta.description };
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const tone = service.accent;
  const accentText =
    tone === "sky"
      ? "text-sky-700"
      : tone === "emerald"
        ? "text-emerald-700"
        : "text-saffron-700";
  const accentBg =
    tone === "sky"
      ? "from-sky-50 to-white ring-sky-200"
      : tone === "emerald"
        ? "from-emerald-50 to-white ring-emerald-200"
        : "from-saffron-50 to-white ring-saffron-200";
  const waLink =
    service.slug === "hajj-umrah"
      ? WA.hajj
      : service.slug === "air-ticketing"
        ? WA.ticket
        : service.slug === "visa-processing"
          ? WA.visa
          : service.slug === "tour-packages"
            ? WA.tour
            : WA.hotel;

  return (
    <>
      <PageHero kicker={service.hero.kicker} title={service.hero.heading} subtitle={service.hero.sub} tone={tone}>
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <Link href="/services" className="hover:text-ink">
            Services
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-ink-soft">{service.title}</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">{service.intro}</p>
              </Reveal>

              <Reveal>
                <h2 className="mt-12 font-display text-2xl font-bold text-ink md:text-3xl">
                  What is included
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.inclusions.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-start gap-2.5 rounded-2xl border border-border bg-white p-4 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="size-3.5" />
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h2 className="mt-12 font-display text-2xl font-bold text-ink md:text-3xl">
                  How we work — step by step
                </h2>
                <ol className="mt-6 space-y-5">
                  {service.process.map((step, i) => (
                    <li
                      key={step.title}
                      className="relative rounded-2xl border border-border bg-white p-6 pl-16"
                    >
                      <span
                        className={cn(
                          "absolute left-6 top-6 grid size-8 place-items-center rounded-full text-sm font-bold text-white",
                          tone === "emerald"
                            ? "bg-emerald-600"
                            : tone === "saffron"
                              ? "bg-saffron-500"
                              : "bg-sky-600"
                        )}
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal>
                <h2 className="mt-12 font-display text-2xl font-bold text-ink md:text-3xl">
                  Frequently asked
                </h2>
                <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-white">
                  {service.faq.map((f) => (
                    <details key={f.q} className="group p-6">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                        <h3 className="font-display text-base font-semibold text-ink">{f.q}</h3>
                        <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-paper-2 text-ink-soft transition-transform group-open:rotate-45">
                          <span className="text-lg leading-none">+</span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-5">
                <Reveal>
                  <div
                    className={cn(
                      "rounded-3xl bg-gradient-to-br p-6 ring-1 ring-inset",
                      accentBg
                    )}
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                      Need a quick answer?
                    </div>
                    <div className={cn("mt-2 font-display text-xl font-bold", accentText)}>
                      Talk to our {service.title.toLowerCase()} desk
                    </div>
                    <div className="mt-4 space-y-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                      >
                        <MessageCircle className="size-4" />
                        WhatsApp this desk
                      </a>
                      <a
                        href={`tel:${SITE.phone}`}
                        className="flex items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-sky-500 hover:text-sky-700"
                      >
                        <Phone className="size-4" />
                        Call {SITE.phone}
                      </a>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink-soft"
                      >
                        Visit our office
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="rounded-3xl border border-border bg-white p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                      Other services
                    </div>
                    <ul className="mt-4 space-y-2">
                      {services
                        .filter((s) => s.slug !== service.slug)
                        .map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper-2 hover:text-sky-700"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-lg">{s.icon}</span>
                                {s.title}
                              </span>
                              <ChevronRight className="size-4 text-ink-subtle group-hover:text-sky-700" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
