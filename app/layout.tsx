import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeInit } from "./theme-init";
import { siteConfig } from "@/config/site";
import { SiteLayout } from "@/components/layout/SiteLayout";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const siteUrl = siteConfig.canonicalBaseUrl ? new URL(siteConfig.canonicalBaseUrl) : undefined;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: { default: `${siteConfig.name} — Software Engineer`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [siteConfig.name, "Software Engineer", "Backend Engineering", "Java", "Spring Boot", "React"],
  openGraph: { title: `${siteConfig.name} — Software Engineer`, description: siteConfig.description, type: "website", ...(siteUrl ? { url: siteUrl } : {}) },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#080b10" }, { media: "(prefers-color-scheme: light)", color: "#f1f5f9" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body id="top" className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}><ThemeInit /><SiteLayout>{children}</SiteLayout></body></html>;
}
