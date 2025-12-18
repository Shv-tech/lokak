"use client";
import { motion } from "framer-motion";

export default function CTAJoinSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-x">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            Your Voice Shapes AI&apos;s Future
          </motion.h2>
          <motion.p variants={itemVariants} className="text-neutral-200 max-w-3xl">
            Whether you&apos;re a policymaker crafting tomorrow&apos;s regulations, a researcher pushing technical
            boundaries, an industry leader building solutions, or a student imagining what&apos;s possible—your perspective matters.
            Join us in ensuring AI serves humanity&apos;s welfare, not undermines it.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="/sponsorship"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Partnership Opportunities →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
