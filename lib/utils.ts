// lib/utils.ts

/** Tailwind class combiner */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Quick email check for client-side UX (not security) */
export function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/** Slugify for blog routes or IDs */
export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Format a date for UI; defaults to en-IN to match India locale */
export function formatDate(
  date: string | number | Date,
  locale: string = "en-IN",
  opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
) {
  return new Intl.DateTimeFormat(locale, opts).format(new Date(date));
}

/** Safe JSON parse; returns fallback on error */
export function safeParseJSON<T = unknown>(str: string, fallback: T): T {
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
}

/** Sleep helper (debug/testing) */
export function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
