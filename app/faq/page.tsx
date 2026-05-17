import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { getServerLang, getServerFaqs, serverTr } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Khaja Air Travels",
  description:
    "Common questions about our Hajj & Umrah packages, air tickets, visa processing, payments and refund policies — answered honestly by the team.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq" }
};

export default function FAQPage() {
  const lang = getServerLang();
  const faqs = getServerFaqs(lang);
  const tp = (e: any) => serverTr(e, lang);
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([
            { name: tp(t.nav.home), href: "/" },
            { name: tp(t.page.faq.kicker), href: "/faq" }
          ])
        ]}
      />
      <PageHero
        kicker={tp(t.page.faq.kicker)}
        title={
          <>
            {tp(t.page.faq.titleA)} <span className="gradient-text">{tp(t.page.faq.titleB)}</span>
          </>
        }
        subtitle={tp(t.page.faq.sub)}
        tone="saffron"
      />

      <section className="section-pad">
        <Container size="tight">
          {categories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat);
            return (
              <Reveal key={cat}>
                <section className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-ink md:text-[28px]">{cat}</h2>
                  <div className="mt-5 divide-y divide-border rounded-3xl border border-border bg-white">
                    {items.map((f) => (
                      <details key={f.q} className="group p-6">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                          <h3 className="font-display text-base font-semibold text-ink">{f.q}</h3>
                          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-paper-2 text-ink-soft transition-transform group-open:rotate-45">
                            <span className="text-lg leading-none">+</span>
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
