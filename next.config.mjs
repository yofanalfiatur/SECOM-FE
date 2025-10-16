import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/alarm",
  assetPrefix: "/alarm",
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://secom.co.id/alarm",
    "https://secom-fe.vercel.app/",
  ],
  experimental: {
    workerThreads: false,
    cpus: 2,
  },

  images: {
    domains: ["api.secom.madebystucel.com", "flagsapi.com"],
  },
};

export default withNextIntl(nextConfig);
