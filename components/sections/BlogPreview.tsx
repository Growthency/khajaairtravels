"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { posts } from "@/lib/data/posts";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { formatDate, readingTime } from "@/lib/utils";

export function BlogPreview() {
  const featured = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, 3);

  return (
    <section className="section-pad">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            kicker="From the journal"
            title={
              <>
                Travel notes from the <span className="gradient-text">Khaja desk</span>.
              </>
            }
            subtitle="Honest, practical writing from our Hajj, Visa and Tours teams. New article every fortnight."
            tone="sky"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-sky-500 hover:text-sky-700"
          >
            All articles
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
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
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-sky-700">
                    {p.title}
                  </h3>
                </Link>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                  {p.excerpt}
                </p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700"
                >
                  Read article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
