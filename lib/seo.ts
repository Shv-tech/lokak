
import type { Metadata } from "next";

export const SITE_NAME = "Lokakṣema 2026";
export const SITE_TAGLINE = "Where AI Meets Humanity";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.lokaksema2026.org";
export const DEFAULT_OG = "/og/default-og.png";

export const defaultMetadata: Metadata = {
  title: `${SITE_NAME} — Where AI Meets Humanity's Future`,
  description:
    "The Global AI Well-being Summit by SHV Groups & Utopian Space: convening world leaders, researchers, and innovators to ensure AI serves the welfare of all.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — Where AI Meets Humanity's Future`,
    description: "Global AI Well-being Summit | Bharat Mandapam, New Delhi | Q4 2026",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Where AI Meets Humanity's Future`,
    description: "Global AI Well-being Summit | Bharat Mandapam, New Delhi | Q4 2026",
    images: [DEFAULT_OG],
  },
};


export function pageMeta({
  title,
  description,
  path = "",
  image = DEFAULT_OG,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const url = new URL(path.replace(/^\//, ""), SITE_URL).toString();

  return {
    title: title ? `${title} — ${SITE_NAME}` : defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    openGraph: {
      ...(defaultMetadata.openGraph || {}),
      title: title ? `${title} — ${SITE_NAME}` : (defaultMetadata.openGraph as any)?.title,
      description: description ?? (defaultMetadata.openGraph as any)?.description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      ...(defaultMetadata.twitter || {}),
      title: title ? `${title} — ${SITE_NAME}` : (defaultMetadata.twitter as any)?.title,
      description: description ?? (defaultMetadata.twitter as any)?.description,
      images: [image],
    },
  };
}
