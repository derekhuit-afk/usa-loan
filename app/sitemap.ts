import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/content/posts";
import { STATES } from "@/content/states";
import { PROGRAMS } from "@/content/programs";

export const revalidate = 3600;

const BASE = "https://usa.loan";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const stateRoutes: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${BASE}/states/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const programRoutes: MetadataRoute.Sitemap = PROGRAMS.map((p) => ({
    url: `${BASE}/programs/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Published posts only — mirrors the 404 gate so future URLs never leak.
  const postRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((p) => ({
    url: `${BASE}/learn/${p.slug}`,
    lastModified: new Date(p.publishDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...stateRoutes, ...programRoutes, ...postRoutes];
}
