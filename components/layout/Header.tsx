"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MapPin, Mail } from "lucide-react";
import { cn, SITE, WA } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { services } from "@/lib/data/services";
import { branches } from "@/lib/data/branches";
import { useLang } from "@/components/providers/LanguageProvider";
import { t } from "@/lib/i18n/translations";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const pathname = usePathname();
  const { tr } = useLang();

  const serviceLabel = (slug: string, fallback: string) => {
    const key = slug as keyof typeof t.service;
    return t.service[key] ? tr(t.service[key]) : fallback;
  };

  const nav = [
    { label: tr(t.nav.home), href: "/" },
    { label: tr(t.nav.about), href: "/about" },
    {
      label: tr(t.nav.services),
      href: "/services",
      items: services.map((s) => ({
        label: serviceLabel(s.slug, s.title),
        href: `/services/${s.slug}`,
        desc: s.short,
        icon: s.icon
      }))
    },
    {
      label: tr(t.nav.branches),
      href: "/branches",
      items: branches.map((b) => ({
        label: b.title,
        href: `/branches/${b.slug}`,
        desc: b.role,
        icon: b.accent === "sky" ? "🛫" : b.accent === "emerald" ? "🏘️" : b.accent === "saffron" ? "🌾" : "🌟"
      }))
    },
    { label: tr(t.nav.blog), href: "/blog" },
    { label: tr(t.nav.gallery), href: "/gallery" },
    { label: tr(t.nav.contact), href: "/contact" }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="hidden md:block bg-ink text-white/85 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-2">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {tr(t.topbar.licence)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/65">
              <MapPin className="size-3" />
              {tr(t.topbar.location)}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3" />
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-500",
          scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(15,30,60,0.07)]" : "bg-white/0"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-8 transition-all duration-500",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
            <Logo size={scrolled ? 40 : 48} />
            <div className="leading-tight">
              <div className="font-display text-[17px] font-bold text-ink tracking-tight">
                Khaja <span className="text-sky-700">Air</span> Travels
              </div>
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-ink-muted mt-0.5">
                Licence No-{SITE.licence}
              </div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {nav.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const hasMega = !!link.items;
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasMega && setOpenMega(link.label)}
                  onMouseLeave={() => hasMega && setOpenMega(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-sky-700 bg-sky-50"
                        : "text-ink-soft hover:text-sky-700 hover:bg-sky-50/70"
                    )}
                  >
                    {link.label}
                    {hasMega && (
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform",
                          openMega === link.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {hasMega && openMega === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="w-[520px] rounded-2xl border border-border bg-white shadow-card-hover p-4">
                          <div className="grid grid-cols-1 gap-1">
                            {link.items!.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-paper-2 transition-colors"
                              >
                                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 text-xl">
                                  {item.icon}
                                </span>
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold text-ink group-hover:text-sky-700">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-ink-muted mt-0.5 line-clamp-1">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 border-t border-border pt-3">
                            <Link
                              href={link.href}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-800"
                            >
                              View all {link.label.toLowerCase()} →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(5,150,105,0.55)] hover:from-emerald-700 hover:to-emerald-800 hover:-translate-y-0.5 transition-all"
            >
              <WhatsAppIcon size={16} />
              {tr(t.cta.whatsapp)}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <button
              className="grid size-10 place-items-center rounded-xl bg-paper-2 text-ink"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[60] flex flex-col bg-white"
          >
            <div className="flex items-center justify-between border-b border-border px-5 h-16">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <Logo size={36} />
                <span className="font-display text-base font-bold text-ink">Khaja Air Travels</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-xl bg-paper-2"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              {nav.map((link) => {
                const hasMega = !!link.items;
                if (!hasMega) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3.5 text-base font-semibold",
                        pathname === link.href ? "bg-sky-50 text-sky-700" : "text-ink hover:bg-paper-2"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <details key={link.href} className="group rounded-xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-ink hover:bg-paper-2">
                      {link.label}
                      <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="ml-2 mt-1 space-y-1 border-l-2 border-sky-100 pl-3">
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50"
                      >
                        View all {link.label.toLowerCase()}
                      </Link>
                      {link.items!.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-paper-2"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-ink">{item.label}</div>
                            <div className="text-[11px] text-ink-muted mt-0.5 line-clamp-1">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
            <div className="border-t border-border p-5 space-y-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink"
              >
                <Phone className="size-4" />
                {SITE.phone}
              </a>
              <a
                href={WA.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
              >
                <WhatsAppIcon size={16} />
                {tr(t.cta.whatsappUs)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
