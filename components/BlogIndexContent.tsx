"use client";
import { motion } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";

export default function BlogIndexContent({ posts }: { posts: any[] }) {
  return (
    <div className="container-x section">
      <motion.h1
        className="text-4xl md:text-5xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Insights & Updates
      </motion.h1>
      <motion.p
        className="mt-4 text-neutral-200 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Announcements, program notes, and research highlights from Lokakṣema 2026.
      </motion.p>

      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            excerpt={p.excerpt || ""}
            date={p.date}
          />
        ))}
      </motion.div>

      {posts.length === 0 && (
        <motion.p
          className="mt-10 text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Posts coming soon.
        </motion.p>
      )}
    </div>
  );
}
