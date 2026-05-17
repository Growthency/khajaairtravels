"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { gallery, galleryCategories } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<string | null>(null);
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
  const open = active ? gallery.find((g) => g.id === active) : null;

  return (
    <>
      <PageHero
        kicker="Gallery"
        title={
          <>
            Moments from <span className="gradient-text">our journeys.</span>
          </>
        }
        subtitle="Snapshots from Hajj seasons, Umrah groups, family tours and a typical morning in our Uttara office. Every photograph here is from a real Khaja Air Travels trip."
        tone="emerald"
      />

      <section className="section-pad">
        <Container>
          <div className="-mx-2 mb-10 flex items-center gap-2 overflow-x-auto py-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                  filter === c
                    ? "bg-ink text-white"
                    : "border border-border bg-white text-ink-soft hover:border-sky-500 hover:text-sky-700"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((g, i) => (
              <motion.button
                key={g.id}
                onClick={() => setActive(g.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width:1024px) 280px, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    {g.category}
                  </div>
                  <div className="mt-0.5 line-clamp-1 text-sm font-semibold text-white">{g.title}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-5 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-white text-ink shadow-card"
              >
                <X className="size-4" />
              </button>
              <div className="relative aspect-[4/3]">
                <Image src={open.src} alt={open.alt} fill sizes="800px" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  {open.category}
                </div>
                <h3 className="mt-1.5 font-display text-xl font-bold text-ink">{open.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{open.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBand />
    </>
  );
}
