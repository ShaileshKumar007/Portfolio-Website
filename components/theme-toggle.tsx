"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }
  return <button className="icon-button theme-toggle" type="button" onClick={toggle} aria-label="Toggle color theme" title="Toggle color theme"><span className="theme-dark-icon"><Sun size={17} /></span><span className="theme-light-icon"><Moon size={17} /></span></button>;
}
