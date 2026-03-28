import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.awkwardrecovery.com",
      },
      {
        protocol: "https",
        hostname: "static.legitscript.com",
      },
    ],
  },
};

export default nextConfig;
