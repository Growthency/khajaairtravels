import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/effects/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE, WA } from "@/lib/utils";
import { branches } from "@/lib/data/branches";

export const metadata: Metadata = {
  title: "Contact Us — Khaja Air Travels Uttara office",
  description:
    "Visit our Uttara office, call us or WhatsApp our desk. Saturday — Thursday, 9:30 AM — 8:00 PM. We reply to every enquiry within one working day."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title={
          <>
            Walk in, call, or just say <span className="gradient-text">Assalamu Alaikum</span> on WhatsApp.
          </>
        }
        subtitle="Our Uttara office is open six days a week. Tea is on us. If you cannot come in person, the same team is on the phone and WhatsApp — and we reply within an hour during office hours."
        tone="sky"
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-3xl border border-border bg-white p-6 md:p-9">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                    Send us a note
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-ink md:text-[32px]">
                    Tell us where you'd like to go.
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">
                    Share a few details and the right desk will reply with a quote and the next step.
                  </p>
                  <div className="mt-7">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-5">
                <Reveal>
                  <div className="rounded-3xl bg-gradient-to-br from-sky-700 via-sky-800 to-emerald-800 p-7 text-white shadow-card">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
                      Head office
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold">{SITE.name}</h3>
                    <ul className="mt-5 space-y-4 text-sm">
                      <li className="flex items-start gap-3">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-200" />
                        <span>{SITE.address}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="mt-0.5 size-4 shrink-0 text-emerald-200" />
                        <div>
                          <a href={`tel:${SITE.phone}`} className="block font-semibold hover:underline">
                            {SITE.phone}
                          </a>
                          <a
                            href={`tel:${SITE.phoneAlt}`}
                            className="block text-white/70 hover:underline"
                          >
                            {SITE.phoneAlt}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail className="mt-0.5 size-4 shrink-0 text-emerald-200" />
                        <a href={`mailto:${SITE.email}`} className="hover:underline">
                          {SITE.email}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="mt-0.5 size-4 shrink-0 text-emerald-200" />
                        <span>{SITE.hours}</span>
                      </li>
                    </ul>
                    <a
                      href={WA.general}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-paper-2"
                    >
                      <MessageCircle className="size-4 text-emerald-600" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="overflow-hidden rounded-3xl border border-border">
                    <iframe
                      title="Khaja Air Travels Uttara office map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.0073!2d90.3909!3d23.8742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzI3LjEiTiA5MMKwMjMnMjcuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000"
                      width="100%"
                      height="280"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block border-0"
                    />
                  </div>
                </Reveal>

                <Reveal>
                  <div className="rounded-3xl border border-border bg-white p-7">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-saffron-700">
                      Branch offices
                    </div>
                    <ul className="mt-4 space-y-4">
                      {branches.map((b) => (
                        <li key={b.slug} className="rounded-2xl bg-paper-2 p-4">
                          <div className="flex items-center gap-2.5">
                            <span className="grid size-9 place-items-center rounded-xl bg-white text-sky-700">
                              <Building2 className="size-4" />
                            </span>
                            <div>
                              <div className="text-sm font-semibold text-ink">{b.title}</div>
                              <div className="text-[11px] text-ink-muted">{b.contact?.address}</div>
                            </div>
                          </div>
                          {b.contact?.phone && (
                            <a
                              href={`tel:${b.contact.phone}`}
                              className="mt-2 block text-xs font-medium text-sky-700 hover:underline"
                            >
                              {b.contact.phone}
                            </a>
                          )}
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
    </>
  );
}
