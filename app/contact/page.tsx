"use client";
import { motion } from "framer-motion";

// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container-x section">
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Let&apos;s Shape AI&apos;s Future Together</h1>
        <p className="mt-3 text-lg text-neutral-300">
          Whether you&apos;re interested in partnership, participation, or just learning more—we&apos;d love to hear from you.
        </p>
      </motion.header>

      <motion.section
        className="grid lg:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Get in Touch</h2>
            <ul className="mt-4 text-neutral-200 space-y-2">
              <li><strong>Partnerships:</strong> partnerships@lokaksema2026.org</li>
              <li><strong>Media:</strong> media@lokaksema2026.org</li>
              <li><strong>Hackathon:</strong> hackathon@lokaksema2026.org</li>
              <li><strong>General:</strong> info@lokaksema2026.org</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Organized By</h2>
            <p className="mt-3 text-neutral-200">
              SHV Groups<br />
              Delhi, India
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Summit Venue</h2>
            <p className="mt-3 text-neutral-200">
              <strong>Bharat Mandapam</strong><br />
              Pragati Maidan, New Delhi, India
            </p>
            <ul className="mt-2 text-neutral-400 list-disc list-inside">
              <li>State-of-the-art AV and broadcast facilities</li>
              <li>Full accessibility provisions</li>
              <li>Proximity to international airport and metro</li>
              <li>10,000+ capacity across plenary and breakout spaces</li>
            </ul>
          </div>
        </div>

        {/* Simple form shell — wire to /api/contact later */}
        <form className="rounded-xl card-rainbow bg-black/40 p-6 grid gap-4">
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
          <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Full Name *" required />
          <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Organization" />
          <input type="email" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Email Address *" required />
          <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Phone Number" />
          <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2">
            <option>Inquiry Type</option>
            <option>General</option>
            <option>Sponsorship</option>
            <option>Media</option>
            <option>Hackathon</option>
            <option>Speaking Opportunity</option>
            <option>Other</option>
          </select>
          <textarea rows={5} className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Message *" required />
          <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2">
            <option>How did you hear about us?</option>
            <option>Social Media</option>
            <option>News</option>
            <option>Friend/Colleague</option>
            <option>Other</option>
          </select>
          <button className="mt-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition" type="submit">
            Submit
          </button>
          <p className="text-xs text-neutral-400">
            Your information will be handled according to our Privacy Policy. We&apos;ll respond within 48 business hours.
          </p>
        </form>
      </motion.section>
    </div>
  );
}
