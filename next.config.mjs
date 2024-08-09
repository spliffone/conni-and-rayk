import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  output: "export",
  images: { unoptimized: true },
  env: {
    MAP_API_KEY: process.env.MAP_API_KEY,
  },
};

export default withNextIntl(nextConfig);
