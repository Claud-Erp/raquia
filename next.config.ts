import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 390, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Content-Security-Policy", value: ["default-src 'self'","script-src 'self' 'unsafe-inline' 'unsafe-eval'","style-src 'self' 'unsafe-inline' https://fonts.googleapis.com","font-src 'self' data:","img-src 'self' data: blob: https:","connect-src 'self' https://wa.me","frame-ancestors 'self' http://*.space-z.ai https://*.space-z.ai","base-uri 'self'","form-action 'self'"].join("; ") },
    ];
    return [
      { source: "/(.*)", headers: securityHeaders },
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/:path*(.png|.jpg|.jpeg|.webp|.avif|.svg|.ico)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
