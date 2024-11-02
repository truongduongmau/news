import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/.',
  skipTrailingSlashRedirect: true,
  distDir: './docs',
  output: "export",
};

export default nextConfig;
