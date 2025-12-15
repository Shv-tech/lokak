// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx,json}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
