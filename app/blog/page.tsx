import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { posts } from "@/lib/data/posts";
import { formatDate, readingTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Travel Journal — Hajj, Umrah, Visa, Tour insights",
  description:
    "Honest, practical writing from the Khaja Air Travels Hajj, Visa and Tours teams. Hajj quota updates, visa checklists, itineraries and pre-departure guides."
};

const categories = ["All", "Hajj & Umrah", "Visa", "Tours", "Travel Tips"] as const;

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <PageHero
        kicker="Travel journal"
        title={
          <>
            Notes from our <span className="gradient-text">Hajj, Visa and Tour desks.</span>
          </>
        }
        subtitle="Practical articles, honest checklists and the small details that quietly decide whether a journey goes well — written by the people who book your trip."
        tone="sky"
      />

      <section className="border-b border-border bg-paper">
        <Container>
          <div className="-mx-2 flex items-center gap-2 overflow-x-auto py-4">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="shrink-0 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-ink-soft hover:border-sky-500 hover:text-sky-700"
              >
                {c}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          {featured && (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-border bg-white md:grid-cols-12"
              >
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
                    Latest · {featured.category}
                  </span>
                  <h2 className="font-display text-2xl font-bold leading-tight text-ink md:text-[34px]">
                    {featured.title}
                  </h2>
                  <p className="text-base leading-relaxed text-ink-muted">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-ink-muted">
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {readingTime(featured.content)}
                    </span>
                    <span className="text-ink-soft">By {featured.author.name}</span>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-700">
                    Read article
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
                  <Link href={`/blog/${p.slug}`} className="relative aspect-[16/10] overflow-hidden">
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
                        {readingTime(p.content)}
                      </span>
                    </div>
                    <Link href={`/blog/${p.slug}`}>
                      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-sky-700">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink-soft">{p.author.name}</span>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-sky-700"
                      >
                        Read
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
