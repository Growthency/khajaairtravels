"use client";

import { useMemo } from "react";
import { useLang } from "@/components/providers/LanguageProvider";
import { services } from "@/lib/data/services";
import { servicesBn } from "@/lib/data/services.bn";
import { branches } from "@/lib/data/branches";
import { branchesBn } from "@/lib/data/branches.bn";
import { posts } from "@/lib/data/posts";
import { postsBn } from "@/lib/data/posts.bn";
import { faqs } from "@/lib/data/faqs";
import { faqsBn } from "@/lib/data/faqs.bn";
import { testimonials } from "@/lib/data/testimonials";
import { testimonialsBn } from "@/lib/data/testimonials.bn";
import { gallery } from "@/lib/data/gallery";
import { galleryBn, galleryCategoryMap } from "@/lib/data/gallery.bn";
import { leadership } from "@/lib/data/leadership";
import { leadershipBn } from "@/lib/data/leadership.bn";

export function useServices() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? servicesBn : services), [lang]);
}

export function useBranches() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? branchesBn : branches), [lang]);
}

export function usePosts() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? postsBn : posts), [lang]);
}

export function useFaqs() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? faqsBn : faqs), [lang]);
}

export function useFaqCategories() {
  const items = useFaqs();
  return useMemo(() => Array.from(new Set(items.map((f) => f.category))), [items]);
}

export function useTestimonials() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? testimonialsBn : testimonials), [lang]);
}

export function useGallery() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? galleryBn : gallery), [lang]);
}

export function useGalleryCategoryLabel() {
  const { lang } = useLang();
  return (cat: string) => (lang === "bn" ? galleryCategoryMap[cat] ?? cat : cat);
}

export function useLeadership() {
  const { lang } = useLang();
  return useMemo(() => (lang === "bn" ? leadershipBn : leadership), [lang]);
}
