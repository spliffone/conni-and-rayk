import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "out",
  output: "export",
  images: { unoptimized: true },
  env: { MAP_API_KEY: process.env.MAP_API_KEY },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
