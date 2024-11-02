import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/news',
  reactStrictMode: true,
  distDir: './docs',
  output: "export",
};

export default nextConfig;
