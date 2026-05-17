import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { branches } from "@/lib/data/branches";
import { posts } from "@/lib/data/posts";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`,        lastModified: today, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE.url}/about`,   lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`,lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/branches`,lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/blog`,    lastModified: today, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE.url}/contact`, lastModified: today, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${SITE.url}/gallery`, lastModified: today, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/faq`,     lastModified: today, changeFrequency: "monthly", priority: 0.6 }
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  const branchRoutes: MetadataRoute.Sitemap = branches.map((b) => ({
    url: `${SITE.url}/branches/${b.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.65
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
    images: [p.cover.startsWith("http") ? p.cover : `${SITE.url}${p.cover}`]
  }));

  return [...staticRoutes, ...serviceRoutes, ...branchRoutes, ...blogRoutes];
}
