"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import type { BlogSummary } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-format";
import { Reveal } from "@/components/motion/Reveal";

export function BlogBrowser({ posts }: { posts: BlogSummary[] }) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => posts.filter((post) => `${post.title} ${post.summary} ${post.category}`.toLowerCase().includes(query.toLowerCase())), [posts, query]);

  return <>
    <header className="page-width blog-index-hero"><Reveal><span className="page-kicker">FIELD NOTES / 01—{String(posts.length).padStart(2, "0")}</span><h1 className="page-title">Thinking in <span>systems.</span></h1><p className="page-description">Notes on backend engineering, reliability, and ideas I’m exploring along the way.</p><p className="blog-demo-banner">Sample articles are demonstration content and are not published essays.</p></Reveal></header>
    <section className="page-width blog-browser" aria-label="Browse technical writing">
      <div className="blog-controls"><label className="blog-search"><Search size={16} aria-hidden="true"/><span className="sr-only">Search articles</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the notes…" /></label></div>
      <div className="blog-list" aria-live="polite">{visible.map((post, index) => <Reveal key={post.slug}><article className="blog-card"><div className="blog-card-index">{String(index + 1).padStart(2, "0")}<span> / {post.category}</span></div><div><h2><Link href={`/blogs/${post.slug}`}>{post.title}<ArrowUpRight size={17} aria-hidden="true" /></Link></h2><p>{post.summary}</p><div className="blog-card-meta"><span>{formatPostDate(post.date)}</span><span>{post.readingMinutes} min read</span></div></div><span className="blog-card-mark" aria-hidden="true">{post.demo ? "DEMO" : "NOTE"}</span></article></Reveal>)}{visible.length === 0 && <p className="blog-empty">No notes match that search. Try a different phrase.</p>}</div>
    </section>
  </>;
}
