import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Updated from deprecated `domains` to `remotePatterns` for Next.js 16+
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
