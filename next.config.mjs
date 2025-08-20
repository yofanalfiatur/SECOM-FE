import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://secom.madebystucel.com",
    "https://secom-fe.vercel.app/",
  ],
  experimental: {
    workerThreads: false,
    cpus: 2,
  },
};

export default withNextIntl(nextConfig);
