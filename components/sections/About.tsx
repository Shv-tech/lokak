"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      className="section bg-gradient-to-b from-black/30 to-transparent"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-x">
        <h2 className="mb-4">More Than a Summit—A Catalyst for Global Transformation</h2>
        <p className="mb-4">
          Lokakṣema 2026 represents the premier platform where governments, industry leaders,
          researchers, and communities unite to solve humanity&apos;s most pressing challenges
          through responsible AI innovation.
        </p>
        <p className="mb-6">
          Organized by SHV Groups and powered by Utopian Space, we&apos;re building bridges
          between research and reality, policy and practice, vision and action.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Mission Statement</h3>
            <p className="mt-2 text-neutral-200">
              To accelerate the deployment of responsible AI solutions for global good by
              connecting research, policy, industry, and communities in meaningful collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Vision Statement</h3>
            <p className="mt-2 text-neutral-200">
              By 2030, Lokakṣema will define the global standard for responsible AI governance—
              the forum where artificial intelligence advances equity, justice, and sustainable
              prosperity for all nations.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
