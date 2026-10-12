"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, motion } from "motion/react";
import { Check } from "lucide-react";

export function BlogReader({ children }: { children: React.ReactNode }) {
  const article = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: article, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const root = article.current;
    if (!root) return;
    const buttons: HTMLButtonElement[] = [];
    root.querySelectorAll("pre").forEach((pre, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code-button";
      button.dataset.copyCode = String(index + 1);
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.innerHTML = '<span aria-hidden="true">⧉</span><span>Copy</span>';
      pre.append(button);
      buttons.push(button);
    });
    const copy = async (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement) || !target.dataset.copyCode) return;
      const code = target.closest("pre")?.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(code);
        setCopied(target.dataset.copyCode ?? "code");
        window.setTimeout(() => setCopied(null), 1600);
      } catch { setCopied("unavailable"); window.setTimeout(() => setCopied(null), 1800); }
    };
    root.addEventListener("click", copy);
    return () => { root.removeEventListener("click", copy); buttons.forEach((button) => button.remove()); };
  }, []);

  return <><motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true"/><article ref={article} className="blog-reader">{children}</article>{copied && <div className="copy-status" role="status" aria-live="polite">{copied === "unavailable" ? "Clipboard unavailable" : <><Check size={14}/> Code copied</>}</div>}</>;
}
