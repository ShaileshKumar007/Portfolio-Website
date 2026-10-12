import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.canonicalBaseUrl;
  return { rules: { userAgent: "*", allow: "/" }, ...(base ? { sitemap: `${base.replace(/\/$/, "")}/sitemap.xml` } : {}) };
}
