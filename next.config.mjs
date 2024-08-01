import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  env: {
    MAP_API_KEY: "dummy",
  },
};

export default withNextIntl(nextConfig);
