import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/blog";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.canonicalBaseUrl.replace(/\/$/, "");
  if (!base) return [];
  const staticRoutes = ["", "/about", "/experience", "/projects", "/blogs", "/contact", "/resume"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, changeFrequency: "yearly" as const })),
    ...getBlogPosts().filter((post) => !post.demo).map((post) => ({ url: `${base}/blogs/${post.slug}`, changeFrequency: "yearly" as const })),
  ];
}
