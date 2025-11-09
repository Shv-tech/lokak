import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HomeLayout from "@/components/HomeLayout";

export const metadata: Metadata = pageMeta({
  title: "Home",
  path: "/",
});

export const revalidate = 3600;

export default function HomePage() {
  return <HomeLayout />;
}
