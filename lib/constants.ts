// lib/constants.ts

export const NAV_ITEMS = [
  { name: "About", href: "/about" },
  { name: "Summit", href: "/summit" },
  { name: "Agenda", href: "/summit/agenda" },
  { name: "Hackathon", href: "/hackathon" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Legacy & Impact", href: "/legacy-impact" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
] as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  summit: "/summit",
  agenda: "/summit/agenda",
  hackathon: "/hackathon",
  sponsorship: "/sponsorship",
  legacy: "/legacy-impact",
  blog: "/blog",
  contact: "/contact",
  register: "/register",
} as const;

export const EMAILS = {
  partnerships: "partnerships@lokaksema2026.org",
  media: "media@lokaksema2026.org",
  hackathon: "hackathon@lokaksema2026.org",
  info: "info@lokaksema2026.org",
} as const;

export const SUMMIT = {
  city: "New Delhi",
  venue: "Bharat Mandapam, Pragati Maidan",
  whenShort: "Q4 2026",
  tagline: "Where AI Meets Humanity's Future",
} as const;

export const SOCIALS = [
  // Replace with real links when ready
  { name: "X", href: "https://x.com/", handle: "@lokaksema2026" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", handle: "Lokakṣema 2026" },
  { name: "YouTube", href: "https://www.youtube.com/", handle: "Lokakṣema" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
