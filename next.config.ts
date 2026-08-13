import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.JPG": { type: "asset" },
      "*.JPEG": { type: "asset" },
      "*.PNG": { type: "asset" },
    },
  },
};

export default nextConfig;
