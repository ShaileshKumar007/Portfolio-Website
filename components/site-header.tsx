"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Technical Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#home" className="wordmark" aria-label="Shailesh Kumar, home"><span className="wordmark-mark">S</span><span>shailesh<span className="wordmark-dot">.</span></span></a>
      <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="mobile-resume" href="/Shailesh_Kumar_Resume.pdf" download>Download résumé ↗</a>
      </nav>
      <div className="header-actions"><a className="resume-link" href="/Shailesh_Kumar_Resume.pdf" download>Résumé <span>↗</span></a><ThemeToggle /><button className="icon-button menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button></div>
    </header>
  );
}
