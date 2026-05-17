import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { branches } from "@/lib/data/branches";
import { posts } from "@/lib/data/posts";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticRoutes = ["", "/about", "/services", "/branches", "/blog", "/contact", "/gallery", "/faq"].map(
    (p) => ({
      url: `${SITE.url}${p}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7
    })
  );
  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));
  const branchRoutes = branches.map((b) => ({
    url: `${SITE.url}/branches/${b.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));
  const blogRoutes = posts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  return [...staticRoutes, ...serviceRoutes, ...branchRoutes, ...blogRoutes];
}
