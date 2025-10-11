import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";
import BlogIndexContent from "@/components/BlogIndexContent";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  path: "/blog",
});

export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return <BlogIndexContent posts={posts} />;
}
