import type { Metadata } from "next";
import { BlogBrowser } from "@/components/blog/BlogBrowser";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Technical writing",
  description: "Learning notes and technical writing by Shailesh Kumar.",
};

export default function BlogsPage() {
  return <main id="main" className="page-main blog-index-page"><a className="skip-link" href="#main">Skip to content</a><BlogBrowser posts={getBlogPosts()} /></main>;
}
