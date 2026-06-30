import type { NextConfig } from 'next';

// GitHub Pages serves the site at /<repo-name>/ — basePath is required.
// Vercel and custom domains serve from root — no basePath needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export has no image optimization server; next/image components
    // use the img() helper from lib/imageLoader to prepend basePath manually.
    unoptimized: true,
  },
  reactStrictMode: true,
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;
