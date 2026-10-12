import type { ReactNode } from "react";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteLayout({ children }: { children: ReactNode }) {
  return <>
    <ScrollProgress />
    <SiteHeader />
    {children}
    <SiteFooter />
  </>;
}
