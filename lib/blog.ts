import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import type { Heading, Root, RootContent } from "mdast";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

type Frontmatter = {
  title: string;
  summary: string;
  category: string;
  date?: string;
  demo?: boolean;
};

export type BlogHeading = { title: string; id: string; depth: number };
export type BlogSummary = Frontmatter & { slug: string; readingMinutes: number; headings: BlogHeading[] };
export type BlogPost = BlogSummary & { markdown: string; html: string };

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[`'"“”]/g, "").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
}

function inlineText(node: RootContent | Heading["children"][number]): string {
  if ("value" in node && typeof node.value === "string") return node.value;
  if ("children" in node && Array.isArray(node.children)) return node.children.map((child) => inlineText(child as Heading["children"][number])).join("");
  return "";
}

function headingIdPlugin() {
  return (tree: Root) => {
    for (const node of tree.children) {
      if (node.type !== "heading") continue;
      const title = node.children.map(inlineText).join("");
      const existing = node.data?.hProperties as Record<string, unknown> | undefined;
      node.data = { ...node.data, hProperties: { ...existing, id: slugify(title) } };
    }
  };
}

function readFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".md")).map((file) => {
    const source = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const parsed = matter(source);
    const metadata = parsed.data as Partial<Frontmatter>;
    if (!metadata.title || !metadata.summary || !metadata.category) return null;
    const slug = path.basename(file, ".md");
    const words = parsed.content.trim().split(/\s+/).filter(Boolean).length;
    const headings = [...parsed.content.matchAll(/^(#{2,3})\s+(.+)$/gm)].map((match) => ({ title: match[2].trim(), id: slugify(match[2].replace(/[`*_]/g, "").trim()), depth: match[1].length }));
    const date = typeof metadata.date === "string" && metadata.date.trim() ? metadata.date : undefined;
    const summary: BlogSummary = {
      slug,
      title: metadata.title,
      summary: metadata.summary,
      category: metadata.category,
      ...(date ? { date } : {}),
      demo: metadata.demo === true,
      readingMinutes: Math.max(1, Math.ceil(words / 210)),
      headings,
    };
    return { summary, markdown: parsed.content };
  }).filter((item): item is NonNullable<typeof item> => item !== null);
}

export function getBlogPosts() {
  return readFiles().map(({ summary }) => summary).sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || a.title.localeCompare(b.title));
}

async function renderMarkdown(markdown: string) {
  const result = await unified().use(remarkParse).use(remarkGfm).use(headingIdPlugin).use(remarkRehype).use(rehypeHighlight).use(rehypeStringify).process(markdown);
  return String(result);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const match = readFiles().find(({ summary }) => summary.slug === slug);
  if (!match) return null;
  return { ...match.summary, markdown: match.markdown, html: await renderMarkdown(match.markdown) };
}

