"use client";
import { motion } from "framer-motion";

export default function CTAJoinSection() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-x">
        <h2 className="mb-4">Your Voice Shapes AI&apos;s Future</h2>
        <p className="text-neutral-200 max-w-3xl">
          Whether you&apos;re a policymaker crafting tomorrow&apos;s regulations, a researcher pushing technical
          boundaries, an industry leader building solutions, or a student imagining what&apos;s possible—your perspective matters.
          Join us in ensuring AI serves humanity&apos;s welfare, not undermines it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/sponsorship"
            className="rounded-xl border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Explore Partnership Opportunities →
          </a>
        </div>
      </div>
    </motion.section>
  );
}
