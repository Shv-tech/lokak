
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { getAllPosts, getPostCompiled } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter } = await getPostCompiled(params.slug);
    return pageMeta({
      title: frontmatter.title,
      description: frontmatter.excerpt,
      path: `/blog/${params.slug}`,
      image: frontmatter.cover || "/og/default-og.png",
    });
  } catch {
    return pageMeta({ title: "Post", path: `/blog/${params.slug}` });
  }
}

export default async function BlogPost({ params }: Props) {
  try {
    const { content, frontmatter } = await getPostCompiled(params.slug);

    return (
      <div className="container-x section">
        <article className="prose">
          <header className="not-prose mb-8">
            <p className="kicker">{formatDate(frontmatter.date)}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{frontmatter.title}</h1>
            {frontmatter.author && (
              <p className="mt-1 text-neutral-400 text-sm">By {frontmatter.author}</p>
            )}

            {frontmatter.cover && (
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={frontmatter.cover}
                  alt=""
                  width={1600}
                  height={900}
                  priority
                />
              </div>
            )}
          </header>

          {}
          {content}
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}
