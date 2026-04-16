import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    { source: '/stacks/anti-aging', destination: '/stacks/longevity', permanent: true },
    { source: '/products/tirzepatide', destination: '/products/tirzepatide-15mg', permanent: true },
    { source: '/products/semaglutide', destination: '/products/semaglutide-6mg', permanent: true },
    { source: '/products/retatrutide', destination: '/products/retatrutide-10mg', permanent: true },
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days for remote images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phiogen.is',
        pathname: '/images/products/**',
      },
      {
        protocol: 'https',
        hostname: 'apollopeptidesciences.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
