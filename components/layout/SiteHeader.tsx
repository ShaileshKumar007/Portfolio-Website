"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label={`${siteConfig.name}, home`} onClick={() => setOpen(false)}>
          <span className="wordmark-mark">{siteConfig.monogram}</span><span className="wordmark-period">.</span>
        </Link>
        <nav id="site-navigation" className={`main-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
          <a className="mobile-resume" href={siteConfig.resumePath} download={siteConfig.resumeFilename}>Download résumé <span>↗</span></a>
        </nav>
        <div className="header-actions">
          <a className="resume-button" href={siteConfig.resumePath} download={siteConfig.resumeFilename}>Resume <span>↗</span></a>
          <ThemeToggle />
          <button className="mobile-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
    </header>
  );
}
