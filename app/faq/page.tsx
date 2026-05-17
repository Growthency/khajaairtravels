import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqs, faqCategories } from "@/lib/data/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Khaja Air Travels",
  description:
    "Common questions about our Hajj & Umrah packages, air tickets, visa processing, payments and refund policies — answered honestly by the team.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq" }
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/faq" }
          ])
        ]}
      />
      <PageHero
        kicker="Frequently asked"
        title={
          <>
            Honest answers to <span className="gradient-text">honest questions.</span>
          </>
        }
        subtitle="Don't see your question? Pick up the phone, send a WhatsApp or walk into our Uttara office. We answer everything that does not require a stamp from a sovereign government."
        tone="saffron"
      />

      <section className="section-pad">
        <Container size="tight">
          {faqCategories.map((cat) => {
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
