// app/layout.tsx
import "./globals.css";
import "@/styles/prose.css";

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { defaultMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import RightClickMenu from "@/components/ui/RightClickMenu";

export const metadata: Metadata = defaultMetadata;

// Mark the whole app as largely static (you can override per-route)
export const revalidate = 3600;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${SITE_NAME} — Global AI Well-being Summit`,
    startDate: "2026-10-01",
    endDate: "2026-12-31",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Bharat Mandapam, Pragati Maidan",
      address: "New Delhi, India",
    },
    image: [`${SITE_URL}/og/default-og.png`],
    organizer: {
      "@type": "Organization",
      name: "SHV Groups",
      url: SITE_URL,
    },
    description:
      "The Global AI Well-being Summit convening world leaders, researchers, and innovators to ensure AI serves the welfare of all.",
    url: SITE_URL,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon / icons (swap with your own if needed) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Preload above-the-fold media for faster LCP */}
        <link rel="preload" as="image" href="/media/hero-fallback.jpg" />
        <link rel="preload" as="video" href="/media/hero.mp4" type="video/mp4" />
        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#0a0b12] text-white antialiased">
        {/* Skip link for a11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        <Navbar />
        {/* pad for fixed nav */}
        <main id="main" className="pt-[64px]">{children}</main>
        <Footer />
        <RightClickMenu />
      </body>
    </html>
  );
}
