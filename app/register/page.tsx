"use client";
import { motion } from "framer-motion";
import RegistrationForm from "../../components/forms/RegistrationForm";

export default function RegisterPage() {
  return (
    <div className="container-x section grid gap-8 md:grid-cols-2 md:items-start">
      <div>
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
          className="mt-4 text-neutral-200 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Fill in your details to register for Lokakṣema. We will confirm your registration via the email provided.
          If you need assistance, use the contact form on the site.
        </motion.p>
      </div>

      <div>
        <RegistrationForm />
      </div>
    </div>
  );
}
