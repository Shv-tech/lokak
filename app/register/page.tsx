"use client";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <div className="container-x section">
      <motion.h1
        className="text-4xl md:text-5xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Register for Lokakṣema 2026
      </motion.h1>
      <motion.p
        className="mt-4 text-neutral-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Registration portal coming soon.
      </motion.p>
    </div>
  );
}
