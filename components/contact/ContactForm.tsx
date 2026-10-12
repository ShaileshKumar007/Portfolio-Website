"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = encodeURIComponent(String(values.get("subject")));
    const body = encodeURIComponent(`From: ${values.get("name")} (${values.get("email")})\n\n${values.get("message")}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a draft. Review it and send it from there.");
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(siteConfig.email); setCopied(true); window.setTimeout(() => setCopied(false), 1500); }
    catch { setStatus(`Email address: ${siteConfig.email}`); }
  }
  return <div className="contact-grid"><form className="contact-form" onSubmit={submit}><div className="contact-form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div><label>Subject<input name="subject" required maxLength={160} /></label><label>Message<textarea name="message" required minLength={10} maxLength={5000} rows={6} /></label><button className="button-primary" type="submit">Prepare email <ArrowUpRight size={15}/></button><p className="contact-form-status" role="status" aria-live="polite">{status}</p></form><aside className="contact-direct"><span className="about-label">DIRECT CHANNEL</span><h2>Prefer email?</h2><p>Use the address below. The form opens a draft in your mail app; it does not send or store messages.</p><button type="button" onClick={copyEmail} className="contact-email" aria-label={copied ? "Email address copied" : "Copy email address to clipboard"}><span>{siteConfig.email}</span>{copied ? <Check size={15}/> : <Copy size={15}/>}</button><span className="contact-mini" role="status" aria-live="polite">{copied ? "Copied to clipboard" : ""}</span><div className="contact-status"><i/>Open to conversations about engineering and product problems.</div></aside></div>;
}
