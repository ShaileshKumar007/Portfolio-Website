"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function ArticleShare() {
  const [copied, setCopied] = useState(false);
  async function copyLink() {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  }
  async function share() {
    if (navigator.share) { try { await navigator.share({ title: document.title, url: window.location.href }); return; } catch { return; } }
    await copyLink();
  }
  return <div className="article-share"><span>SHARE THIS NOTE</span><button type="button" onClick={share} aria-label="Share or copy article link">{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "Copied" : "Share"}</button></div>;
}
