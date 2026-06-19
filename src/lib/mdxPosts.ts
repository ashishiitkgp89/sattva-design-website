import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface MdxFrontmatter {
  title: string;
  excerpt?: string;
  date: string; // ISO date, e.g. "2026-01-15"
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  coverImage?: string;
}

export interface MdxPost extends MdxFrontmatter {
  slug: string;
  content: string;
}

export function getMdxSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getMdxPost(slug: string): MdxPost | null {
  const fp = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fp)) return null;
  const raw = fs.readFileSync(fp, 'utf8');
  const { data, content } = matter(raw);
  return { slug, content, ...(data as MdxFrontmatter) };
}

export function getAllMdxPosts(): MdxPost[] {
  return getMdxSlugs()
    .map((s) => getMdxPost(s))
    .filter((p): p is MdxPost => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
