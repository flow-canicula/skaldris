import type { NextConfig } from 'next';

// GitHub Pages serves the site at /<repo-name>/ — basePath is required.
// Vercel and custom domains serve from root — no basePath needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Custom loader prepends basePath so static exports under a sub-path
    // (e.g. GitHub Pages /skaldris/) resolve all image src paths correctly.
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
  reactStrictMode: true,
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;
