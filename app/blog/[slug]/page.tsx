import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { posts } from "@/lib/data/posts";
import { formatDate, readingTime } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { getServerLang, getServerPost, getServerRecentPosts, serverTr, localePath } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/translations";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getServerPost(params.slug);
  if (!p) return { title: "Article not found" };
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      url: `/blog/${p.slug}`,
      title: p.title,
      description: p.excerpt,
      images: [{ url: p.cover, alt: p.coverAlt }],
      type: "article",
      publishedTime: p.publishedAt,
      authors: [p.author.name],
      tags: p.tags
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.excerpt,
      images: [p.cover]
    }
  };
}

export default function BlogPost({ params }: Props) {
  const lang = getServerLang();
  const post = getServerPost(params.slug, lang);
  if (!post) notFound();
  const related = getServerRecentPosts(3, post.slug, lang);
  const tp = (e: any) => serverTr(e, lang);
  const lp = (h: string) => localePath(h, lang);
  const minRead = tp(t.sections.blog.minRead);

  return (
    <>
      <article>
        <JsonLd
          data={[
            articleSchema(post),
            breadcrumbSchema([
              { name: tp(t.nav.home), href: "/" },
              { name: tp(t.nav.blog), href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` }
            ])
          ]}
        />
        <header className="relative isolate overflow-hidden bg-ink text-white pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="absolute inset-0 -z-10 opacity-40">
            <Image src={post.cover} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />

          <Container>
            <Link href={lp("/blog")} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 hover:text-emerald-200">
              <ArrowLeft className="size-4" />
              {tp(t.sections.blog.backTo)}
            </Link>
            <div className="mt-6 max-w-3xl">
              <span className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                {post.category}
              </span>
              <h1 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-[48px]">{post.title}</h1>
              <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <User className="size-4" />
                  {post.author.name} · {post.author.role}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {readingTime(post.content).replace("min read", minRead)}
                </span>
              </div>
            </div>
          </Container>
        </header>

        <section className="bg-paper py-16 md:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <Reveal>
                  <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                </Reveal>

                <div className="mt-12 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-ink-soft ring-1 ring-inset ring-border">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="sticky top-28 space-y-5">
                  <div className="rounded-3xl border border-border bg-paper-2 p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">{tp(t.sections.blog.writtenBy)}</div>
                    <div className="mt-3 flex items-start gap-3">
                      <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white font-bold">
                        {post.author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-ink">{post.author.name}</div>
                        <div className="mt-0.5 text-xs text-ink-muted">{post.author.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-white p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">{tp(t.sections.blog.continue)}</div>
                    <ul className="mt-4 space-y-4">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link href={lp(`/blog/${r.slug}`)} className="group flex gap-3">
                            <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl">
                              <Image src={r.cover} alt={r.coverAlt} fill sizes="64px" className="object-cover transition-transform group-hover:scale-110" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-700">{r.category}</div>
                              <div className="mt-1 line-clamp-2 text-sm font-semibold text-ink group-hover:text-sky-700">{r.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="border-t border-border bg-paper-2 py-16">
          <Container>
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold text-ink md:text-[32px]">{tp(t.sections.blog.moreFrom)}</h2>
              <Link href={lp("/blog")} className="hidden items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-800 md:inline-flex">
                {tp(t.sections.blog.all)}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={lp(`/blog/${r.slug}`)} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={r.cover} alt={r.coverAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">{r.category}</span>
                    <h3 className="mt-2 line-clamp-2 font-display text-lg font-bold text-ink group-hover:text-sky-700">{r.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </article>
      <CtaBand />
    </>
  );
}
