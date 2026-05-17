"use client";

import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { useLang, useLocaleHref } from "@/components/providers/LanguageProvider";
import { t } from "@/lib/i18n/translations";

export default function NotFound() {
  const { tr } = useLang();
  const lh = useLocaleHref();
  return (
    <section className="relative isolate overflow-hidden bg-paper py-32 md:py-40">
      <GradientBlob color="sky" size="xl" className="-left-32 -top-24" opacity={0.18} />
      <GradientBlob color="emerald" size="lg" className="-right-32 bottom-0" opacity={0.18} />
      <Container className="relative text-center">
        <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100">
          <Compass className="size-8 text-sky-700" />
        </div>
        <h1 className="mt-8 font-display text-6xl font-bold tracking-tight text-ink md:text-7xl">
          {tr(t.notFound.head)}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink-muted md:text-lg">{tr(t.notFound.sub)}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={lh("/")} className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">
            <ArrowLeft className="size-4" />
            {tr(t.notFound.home)}
          </Link>
          <Link href={lh("/services")} className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-sky-500 hover:text-sky-700">
            {tr(t.notFound.browse)}
          </Link>
        </div>
      </Container>
    </section>
  );
}
