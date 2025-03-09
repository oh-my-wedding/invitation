import type { NextConfig } from "next";

const assetPrefix = process.env.NODE_ENV === 'production' ? 'https://oh-my-wedding.github.io/invitation/' : '';
const basePath = '/invitation';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix,
  basePath,
};

export default nextConfig;
