"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect } from "react";

export function ThemeToggle() {
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* Theme still changes for this page view. */ }
  }

  return <button className="theme-toggle icon-button" type="button" onClick={toggle} aria-label="Toggle color theme" title="Toggle color theme"><Sun className="theme-sun" size={16} /><Moon className="theme-moon" size={16} /></button>;
}
