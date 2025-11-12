import type { NextConfig } from "next";
const isPro = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isPro ? '/minnies.work' : '',
  assetPrefix: isPro ? '/minnies.work' : '',
  output: 'export',
  trailingSlash: true
};

export default nextConfig;
