/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          { key: 'X-DNS-Prefetch-Control',    value: 'on' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Product slug rename (commit add67ef, 2026-04-13) — preserve indexed URL equity
      { source: '/products/bpc-157',          destination: '/products/bpc-157-10mg',                           permanent: true },
      { source: '/products/tb-500',           destination: '/products/tb-500-thymosin-beta-4-10mg',            permanent: true },
      { source: '/products/ghk-cu',           destination: '/products/ghk-cu-50mg',                            permanent: true },
      { source: '/products/melanotan-2',      destination: '/products/melanotan-2-10mg',                       permanent: true },
      { source: '/products/epithalon',        destination: '/products/epitalon-50mg',                          permanent: true },
      { source: '/products/ipamorelin',       destination: '/products/ipamorelin-10mg',                        permanent: true },
      { source: '/products/pt-141',           destination: '/products/pt-141-10mg',                            permanent: true },
      { source: '/products/igf-1-lr3',        destination: '/products/igf-1-lr3-1mg',                          permanent: true },
      { source: '/products/tesamorelin',      destination: '/products/tesamorelin-10mg',                       permanent: true },
      { source: '/products/selank',           destination: '/products/selank-10mg',                            permanent: true },
      { source: '/products/thymosin-alpha-1', destination: '/products/thymosin-alpha-1-10mg',                  permanent: true },
      { source: '/products/cjc-1295',         destination: '/products/cjc-1295-no-dac-10mg',                   permanent: true },
      { source: '/products/dsip',             destination: '/products/dsip-delta-sleep-inducing-peptide-10mg', permanent: true },
      { source: '/products/mots-c',           destination: '/products/mots-c-10mg',                            permanent: true },

      // Discontinued SKUs — redirect to closest guide so equity transfers
      { source: '/products/mk-677',           destination: '/mk-677-ibutamoren-guide',                         permanent: true },
      { source: '/products/semax',            destination: '/selank-semax-nootropic-peptide-guide',            permanent: true },

      // Product-family redirects (migrated from unused next.config.ts)
      { source: '/products/tirzepatide',      destination: '/products/tirzepatide-15mg',                       permanent: true },
      { source: '/products/semaglutide',      destination: '/products/semaglutide-6mg',                        permanent: true },
      { source: '/products/retatrutide',      destination: '/products/retatrutide-10mg',                       permanent: true },
      { source: '/stacks/anti-aging',         destination: '/stacks/longevity',                                permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
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
}

module.exports = nextConfig
