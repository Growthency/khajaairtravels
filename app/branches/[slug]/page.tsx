import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { branches, getBranch } from "@/lib/data/branches";
import { SITE, WA, cn } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const b = getBranch(params.slug);
  if (!b) return { title: "Branch not found" };
  return { title: b.meta.title, description: b.meta.description };
}

const tones = {
  sky: { bg: "from-sky-50 to-white ring-sky-200", text: "text-sky-700", bar: "from-sky-500 to-sky-700" },
  emerald: {
    bg: "from-emerald-50 to-white ring-emerald-200",
    text: "text-emerald-700",
    bar: "from-emerald-500 to-emerald-700"
  },
  saffron: {
    bg: "from-saffron-50 to-white ring-saffron-200",
    text: "text-saffron-700",
    bar: "from-saffron-500 to-saffron-600"
  }
};

export default function BranchPage({ params }: Props) {
  const branch = getBranch(params.slug);
  if (!branch) notFound();
  const tone = tones[branch.accent];

  return (
    <>
      <PageHero
        kicker={`Est. ${branch.established} · ${branch.role}`}
        title={branch.title}
        subtitle={branch.tagline}
        tone={branch.accent}
      >
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <Link href="/branches" className="hover:text-ink">
            Branches
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-ink-soft">{branch.title}</span>
        </nav>
      </PageHero>

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">{branch.intro}</p>
              </Reveal>

              {branch.body.map((b, i) => (
                <Reveal key={b.heading} delay={i * 0.05}>
                  <div className="mt-12">
                    <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                      {b.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-muted">
                      {b.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="mt-12 grid gap-3 md:grid-cols-2">
                  {branch.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 text-sm text-ink-soft"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="size-3.5" />
                      </span>
                      {h}
                    </div>
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
                      tone.bg
                    )}
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                      Quick facts
                    </div>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="text-ink-muted">Founder</dt>
                        <dd className={cn("font-semibold", tone.text)}>{branch.role}</dd>
                      </div>
                      <div>
                        <dt className="text-ink-muted">Established</dt>
                        <dd className={cn("font-semibold", tone.text)}>{branch.established}</dd>
                      </div>
                      <div>
                        <dt className="text-ink-muted">What we do</dt>
                        <dd className="text-ink-soft">{branch.sectors.join(" · ")}</dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>

                {branch.contact && (
                  <Reveal>
                    <div className="rounded-3xl border border-border bg-white p-6">
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                        Contact this branch
                      </div>
                      <ul className="mt-4 space-y-3 text-sm">
                        {branch.contact.address && (
                          <li className="flex gap-3">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-sky-600" />
                            <span className="text-ink-soft">{branch.contact.address}</span>
                          </li>
                        )}
                        {branch.contact.phone && (
                          <li className="flex gap-3">
                            <Phone className="mt-0.5 size-4 shrink-0 text-sky-600" />
                            <a href={`tel:${branch.contact.phone}`} className="text-ink-soft hover:text-sky-700">
                              {branch.contact.phone}
                            </a>
                          </li>
                        )}
                        {branch.contact.email && (
                          <li className="flex gap-3">
                            <Mail className="mt-0.5 size-4 shrink-0 text-sky-600" />
                            <a href={`mailto:${branch.contact.email}`} className="text-ink-soft hover:text-sky-700">
                              {branch.contact.email}
                            </a>
                          </li>
                        )}
                      </ul>
                      <a
                        href={WA.general}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                      >
                        <WhatsAppIcon size={16} />
                        WhatsApp the desk
                      </a>
                    </div>
                  </Reveal>
                )}

                <Reveal>
                  <div className="rounded-3xl border border-border bg-white p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                      Other branches
                    </div>
                    <ul className="mt-4 space-y-2">
                      {branches
                        .filter((b) => b.slug !== branch.slug)
                        .map((b) => (
                          <li key={b.slug}>
                            <Link
                              href={`/branches/${b.slug}`}
                              className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper-2 hover:text-sky-700"
                            >
                              {b.title}
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

      <CtaBand />
    </>
  );
}
