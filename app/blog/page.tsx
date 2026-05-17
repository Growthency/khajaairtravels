import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { formatDate, readingTime } from "@/lib/utils";
import { getServerLang, getServerPosts, serverTr, localePath } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "Travel Journal — Hajj, Umrah, Visa, Tour insights",
  description:
    "Honest, practical writing from the Khaja Air Travels Hajj, Visa and Tours teams. Hajj quota updates, visa checklists, itineraries and pre-departure guides.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", type: "website" }
};

export default function BlogIndex() {
  const lang = getServerLang();
  const posts = getServerPosts(lang);
  const tp = (e: any) => serverTr(e, lang);
  const lp = (h: string) => localePath(h, lang);
  const minRead = tp(t.sections.blog.minRead);

  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <PageHero
        kicker={tp(t.page.blog.kicker)}
        title={
          <>
            {tp(t.page.blog.titleA)} <span className="gradient-text">{tp(t.page.blog.titleB)}</span>
          </>
        }
        subtitle={tp(t.page.blog.sub)}
        tone="sky"
      />

      <section className="section-pad">
        <Container>
          {featured && (
            <Reveal>
              <Link href={lp(`/blog/${featured.slug}`)} className="group grid overflow-hidden rounded-3xl border border-border bg-white md:grid-cols-12">
                <div className="relative aspect-[16/10] md:col-span-7 md:aspect-auto">
                  <Image
                    src={featured.cover}
                    alt={featured.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    fetchPriority="high"
                  />
                </div>
                <div className="flex flex-col justify-center gap-5 p-7 md:col-span-5 md:p-10">
                  <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700">
                    {tp(t.sections.blog.latest)} · {featured.category}
                  </span>
                  <h2 className="font-display text-2xl font-bold leading-tight text-ink md:text-[34px]">{featured.title}</h2>
                  <p className="text-base leading-relaxed text-ink-muted">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-ink-muted">
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {readingTime(featured.content).replace("min read", minRead)}
                    </span>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-700">
                    {tp(t.sections.blog.read)}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <Link href={lp(`/blog/${p.slug}`)} className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 backdrop-blur">
                      {p.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-muted">
                      <span>{formatDate(p.publishedAt)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {readingTime(p.content).replace("min read", minRead)}
                      </span>
                    </div>
                    <Link href={lp(`/blog/${p.slug}`)}>
                      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-sky-700">{p.title}</h3>
                    </Link>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink-soft">{p.author.name}</span>
                      <Link href={lp(`/blog/${p.slug}`)} className="inline-flex items-center gap-1.5 font-semibold text-sky-700">
                        {tp(t.sections.blog.readMin)}
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
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
