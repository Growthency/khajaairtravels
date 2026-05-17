import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getServerLang, getServerBranches, serverTr, localePath } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "Our Branches — Khaja Air Travels, Shahi Air, Chandina Housing, Abibil Trading",
  description:
    "Four companies under one founder — Khaja Air Travels (travel), Shahi Air International (manpower), Chandina Village Housing Ltd. (housing) and Abibil Trading Food Products Ltd. (food).",
  alternates: { canonical: "/branches" },
  openGraph: { url: "/branches" }
};

const tones = {
  sky: "from-sky-500 to-sky-700",
  emerald: "from-emerald-500 to-emerald-700",
  saffron: "from-saffron-500 to-saffron-600"
};

export default function BranchesIndex() {
  const lang = getServerLang();
  const branches = getServerBranches(lang);
  const tp = (e: any) => serverTr(e, lang);
  const lp = (h: string) => localePath(h, lang);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tp(t.nav.home), href: "/" },
          { name: tp(t.nav.branches), href: "/branches" }
        ])}
      />
      <PageHero
        kicker={tp(t.page.branches.kicker)}
        title={
          <>
            {tp(t.page.branches.titleA)} <span className="gradient-text">{tp(t.page.branches.titleB)}</span>
          </>
        }
        subtitle={tp(t.page.branches.sub)}
        tone="saffron"
      />

      <section className="section-pad">
        <Container>
          <div className="space-y-10">
            {branches.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.05}>
                <article className="grid gap-8 rounded-3xl border border-border bg-white p-7 md:grid-cols-12 md:p-10">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3">
                      <span className={cn("grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white", tones[b.accent])}>
                        <Building2 className="size-5" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
                        {tp(t.page.branches.estab)} {b.established}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold text-ink md:text-[34px]">{b.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-ink-muted">{b.role}</p>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">{b.tagline}</p>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted">{b.intro}</p>
                    <Link href={lp(`/branches/${b.slug}`)} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink-soft">
                      {tp(t.page.branches.learn)}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl bg-paper-2 p-6 ring-1 ring-inset ring-border">
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">{tp(t.page.branches.whatDoes)}</div>
                      <ul className="mt-4 space-y-2.5">
                        {b.sectors.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm font-medium text-ink-soft">
                            <span className="mt-1 size-1.5 rounded-full bg-sky-600" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 border-t border-border pt-5">
                        <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">{tp(t.page.branches.hlights)}</div>
                        <ul className="mt-4 space-y-2">
                          {b.highlights.slice(0, 3).map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                                <Check className="size-3" />
                              </span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
