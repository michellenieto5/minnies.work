import type { NextConfig } from "next";
const isPro = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  assetPrefix: isPro ? '/minnies.work' : '',
  basePath: isPro ? '/minnies.work' : '',
  output: 'export'
};

export default nextConfig;
