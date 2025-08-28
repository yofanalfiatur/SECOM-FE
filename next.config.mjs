import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/alarm',
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://secom.co.id/alarm",
    "https://secom-fe.vercel.app/",
  ],
  experimental: {
    workerThreads: false,
    cpus: 2,
  },
};

export default withNextIntl(nextConfig);
