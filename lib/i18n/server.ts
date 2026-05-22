import { headers } from "next/headers";
import type { Lang, Translatable } from "./translations";

export function getServerLang(): Lang {
  try {
    const h = headers();
    return h.get("x-locale") === "bn" ? "bn" : "en";
  } catch {
    return "en";
  }
}

export function serverTr(entry: Translatable | string | undefined, lang?: Lang): string {
  const l = lang ?? getServerLang();
  if (entry == null) return "";
  if (typeof entry === "string") return entry;
  return entry[l] ?? entry.en ?? "";
}

export function localePath(href: string, lang?: Lang): string {
  const l = lang ?? getServerLang();
  if (l === "en") return href;
  if (href === "/") return "/bn";
  if (href.startsWith("/bn")) return href;
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return href;
  return `/bn${href}`;
}

import { services } from "@/lib/data/services";
import { servicesBn } from "@/lib/data/services.bn";
import { branches } from "@/lib/data/branches";
import { branchesBn } from "@/lib/data/branches.bn";
import { posts } from "@/lib/data/posts";
import { postsBn } from "@/lib/data/posts.bn";
import { faqs } from "@/lib/data/faqs";
import { faqsBn } from "@/lib/data/faqs.bn";
import { leadership } from "@/lib/data/leadership";
import { leadershipBn } from "@/lib/data/leadership.bn";

export function getServerServices(lang?: Lang) {
  const l = lang ?? getServerLang();
  return l === "bn" ? servicesBn : services;
}
export function getServerService(slug: string, lang?: Lang) {
  return getServerServices(lang).find((s) => s.slug === slug);
}
export function getServerBranches(lang?: Lang) {
  const l = lang ?? getServerLang();
  return l === "bn" ? branchesBn : branches;
}
export function getServerBranch(slug: string, lang?: Lang) {
  return getServerBranches(lang).find((b) => b.slug === slug);
}
export function getServerPosts(lang?: Lang) {
  const l = lang ?? getServerLang();
  return l === "bn" ? postsBn : posts;
}
export function getServerPost(slug: string, lang?: Lang) {
  return getServerPosts(lang).find((p) => p.slug === slug);
}
export function getServerRecentPosts(limit = 3, exclude?: string, lang?: Lang) {
  return getServerPosts(lang)
    .filter((p) => p.slug !== exclude)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
export function getServerFaqs(lang?: Lang) {
  const l = lang ?? getServerLang();
  return l === "bn" ? faqsBn : faqs;
}

export function getServerLeadership(lang?: Lang) {
  const l = lang ?? getServerLang();
  return l === "bn" ? leadershipBn : leadership;
}
