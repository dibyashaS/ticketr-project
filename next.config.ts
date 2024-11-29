import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "https://tame-terrier-644.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
