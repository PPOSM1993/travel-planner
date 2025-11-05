import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6skrptq9d3.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh", // ✅ Permite cualquier subdominio de uploadthing
      },
    ],
  },
};

export default nextConfig;
