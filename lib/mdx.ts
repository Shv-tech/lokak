// lib/mdx.ts
import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import MDXComponents from "@/components/mdx/MDXComponents";

export type PostFrontmatter = {
  title: string;
  date: string;            // ISO
  author?: string;
  excerpt?: string;
  tags?: string[];
  cover?: string;          // /images/...
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export async function getPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostCompiled(slug);
      return { slug, ...frontmatter };
    })
  );
  return posts
    .filter((p) => p.title && p.date)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostCompiled(slug: string) {
  const file = await fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");

  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source: file,
    options: {
      parseFrontmatter: true, // extracts YAML frontmatter
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: "anchor" } }],
        ],
      },
    },
    components: MDXComponents,
  });

  return { content, frontmatter };
}
