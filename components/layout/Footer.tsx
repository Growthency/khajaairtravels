import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { SITE, WA } from "@/lib/utils";
import { services } from "@/lib/data/services";
import { branches } from "@/lib/data/branches";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 12%, rgba(31,114,227,0.65) 0px, transparent 40%),radial-gradient(circle at 88% 18%, rgba(16,185,129,0.50) 0px, transparent 40%),radial-gradient(circle at 50% 100%, rgba(249,110,9,0.50) 0px, transparent 50%)"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${SITE.name} home`}>
              <span className="grid size-12 place-items-center rounded-2xl bg-white p-1.5">
                <Logo size={40} />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[18px] font-bold tracking-tight">
                  Khaja <span className="text-sky-300">Air</span> Travels
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 mt-0.5">
                  Licence No-{SITE.licence}
                </div>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              {SITE.name} is a Government Approved Hajj agency and full-service travel house — Hajj &amp; Umrah, air ticketing, visa processing, hotel booking and curated tour packages from Bangladesh since 2003.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                <ShieldCheck className="size-3.5" /> MoRA Approved
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-sky-300 ring-1 ring-sky-400/20">
                IATA Verified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-saffron-300 ring-1 ring-saffron-400/20">
                HAAB Member
              </span>
            </div>
            <div className="mt-7 flex gap-3">
              {[
                { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
                { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
                { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
                { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-sky-500 hover:ring-sky-300 transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/75 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Our Branches</h3>
            <ul className="mt-4 space-y-2.5">
              {branches.map((b) => (
                <li key={b.slug}>
                  <Link href={`/branches/${b.slug}`} className="text-sm text-white/75 hover:text-white">
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Gallery", href: "/gallery" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" }
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky-300" />
                <span className="text-white/75">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-sky-300" />
                <div className="flex flex-col">
                  <a href={`tel:${SITE.phone}`} className="text-white/85 hover:text-white">
                    {SITE.phone}
                  </a>
                  <a href={`tel:${SITE.phoneAlt}`} className="text-white/55 hover:text-white text-xs">
                    {SITE.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-sky-300" />
                <a href={`mailto:${SITE.email}`} className="text-white/85 hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-sky-300" />
                <span className="text-white/75">{SITE.hours}</span>
              </li>
            </ul>

            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {SITE.name}. All rights reserved. Proprietor: {SITE.proprietor}.
          </p>
          <p className="text-xs text-white/45">
            Crafted with care in Dhaka — for travellers from every corner of Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
