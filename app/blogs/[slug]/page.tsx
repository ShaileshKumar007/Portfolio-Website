import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { ArticleShare } from "@/components/blog/ArticleShare";
import { BlogReader } from "@/components/blog/BlogReader";
import { Reveal } from "@/components/motion/Reveal";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-format";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getBlogPosts().map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Note not found" };
  return { title: post.title, description: post.summary, robots: post.demo ? { index: false, follow: true } : undefined, openGraph: { title: post.title, description: post.summary, type: "article" } };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const posts = getBlogPosts();
  const index = posts.findIndex((item) => item.slug === slug);
  const previous = posts[index - 1];
  const next = posts[index + 1];

  return <main id="main" className="page-main article-page"><a className="skip-link" href="#article-content">Skip to article</a>
    <header className="page-width article-hero"><Reveal><Link className="back-link" href="/blogs"><ArrowLeft size={14}/> All writing</Link><span className="page-kicker">{post.category.toUpperCase()} / {post.demo ? "DEMONSTRATION" : "ARTICLE"}</span><h1 className="page-title">{post.title}</h1><p className="page-description">{post.summary}</p><div className="article-meta"><span>{formatPostDate(post.date)}</span><span><Clock3 size={14}/>{post.readingMinutes} min read</span></div></Reveal></header>
    <div className="page-width article-layout"><aside className="article-toc"><span>ON THIS PAGE</span><nav aria-label="Table of contents">{post.headings.map((heading) => <a key={heading.id} className={heading.depth === 3 ? "toc-sub" : ""} href={`#${heading.id}`}>{heading.title}</a>)}</nav><ArticleShare/></aside>
      <BlogReader><div id="article-content" className="article-content" dangerouslySetInnerHTML={{ __html: post.html }} />{post.demo && <p className="article-demo-note">Demonstration content · review and replace this sample before publishing.</p>}<div className="article-end"><span>END OF NOTE</span><Link href="/blogs">Browse all writing <ArrowRight size={14}/></Link></div></BlogReader></div>
    <nav className="page-width article-pagination" aria-label="Article navigation">{previous ? <Link href={`/blogs/${previous.slug}`}><span><ArrowLeft size={14}/> PREVIOUS NOTE</span><strong>{previous.title}</strong></Link> : <span/>}{next ? <Link className="article-pagination-next" href={`/blogs/${next.slug}`}><span>NEXT NOTE <ArrowRight size={14}/></span><strong>{next.title}</strong></Link> : <span/>}</nav>
  </main>;
}
