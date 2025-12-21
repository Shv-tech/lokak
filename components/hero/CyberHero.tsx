"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function CyberHero() {
  return (
    <div className="relative z-10 h-full flex items-center">
      <motion.div
        className="container-x"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="kicker" variants={itemVariants}>
          New Delhi • Q4 2026 • Bharat Mandapam
        </motion.p>
        <motion.h1
          className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
          variants={itemVariants}
        >
          Where AI Needs Humanity&apos;s Future
        </motion.h1>
        <motion.p
          className="mt-5 text-lg md:text-xl max-w-3xl text-neutral-200"
          variants={itemVariants}
        >
          Lokakṣema 2026: The Global AI Well-being Summit. Convening world leaders, researchers,
          and innovators to ensure artificial intelligence serves the welfare of all.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          variants={itemVariants}
        >
          <Button href="/register">Register for Summit</Button>
          <Button href="/sponsorship" data-variant="outline">Become Sponsor</Button>
          <Button href="/hackathon" data-variant="outline">Join the Hackathon</Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
