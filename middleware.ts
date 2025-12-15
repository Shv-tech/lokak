// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Lightweight security middleware:
 * - Adds common security headers
 * - Optional HTTPS enforcement (skips localhost)
 */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isLocalhost =
    req.nextUrl.hostname === "localhost" || req.nextUrl.hostname === "127.0.0.1";

  // Content Security Policy — permissive to allow future embeds; tighten as needed
  // Allow backend on localhost during development so client-side fetches to
  // http://localhost:4000 are permitted. In production this remains strict.
  const connectSrc = isLocalhost
    ? "connect-src 'self' https: http://localhost:4000 http://127.0.0.1:4000"
    : "connect-src 'self' https:";

  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https:",
    "media-src 'self' data: blob: https:",
    connectSrc,
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");

  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-DNS-Prefetch-Control", "on");
  res.headers.set(
    "Permissions-Policy",
    // Disallow sensors/cam/mic by default; add domains if you later need them
    "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), clipboard-read=(), clipboard-write=(), " +
      "display-capture=(), document-domain=(), encrypted-media=(), fullscreen=*, geolocation=(), gyroscope=(), " +
      "magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=*, publickey-credentials-get=(), screen-wake-lock=(), " +
      "usb=(), web-share=(), xr-spatial-tracking=()"
  );

  // HSTS (only for production + HTTPS)
  if (!isLocalhost && req.nextUrl.protocol === "https:") {
    res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  return res;
}

// Apply to all paths except static assets
export const config = {
  matcher: ["/((?!_next|favicon.ico|og|images|media|fonts|robots.txt|sitemap.xml).*)"],
};
