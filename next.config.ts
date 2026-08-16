import type { NextConfig } from "next"; 

const nextConfig: NextConfig = { 
  reactCompiler: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      }
    ]
  },
  turbopack: {
    rules: {
      "*.JPG": { type: "asset" },
      "*.JPEG": { type: "asset" },
      "*.PNG": { type: "asset" },
    },
  },
};

export default nextConfig;
