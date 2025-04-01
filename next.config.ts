import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    // Next Image Optimization is not supported for statically generated pages
    // https://github.com/vercel/next.js/discussions/19065
    unoptimized: true,
  },
};

export default nextConfig;
