import type { NextConfig } from "next";
const isPro = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isPro ? '/minnies.work' : '',
  basePath: isPro ? '/minnies.work' : '',
  output: 'export',
  trailingSlash: true
};

export default nextConfig;
