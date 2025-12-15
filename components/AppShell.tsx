"use client";

export default function AppShell({ children }: { children: React.ReactNode }) {
  // AppShell is a thin wrapper; splash handling is managed at the Root layout
  return <>{children}</>;
}
