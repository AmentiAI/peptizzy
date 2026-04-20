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
    // Variant consolidation — collapse per-size child slugs to canonical parent URLs.
    // Per SEO playbook: one URL per compound, variants inside via variants[] + Offer array.
    // parentSlug → [childSlug, childSlug, ...]
    const VARIANT_GROUPS = {
      'semaglutide':              ['semaglutide-3mg', 'semaglutide-6mg', 'semaglutide-12mg', 'semaglutide-20mg', 'semaglutide-30mg'],
      'tirzepatide':              ['tirzepatide-15mg', 'tirzepatide-30mg', 'tirzepatide-60mg'],
      'retatrutide':              ['retatrutide-10mg', 'retatrutide-15mg', 'retatrutide-20mg', 'retatrutide-30mg'],
      'cagri-reta':               ['cagri-reta-5mg', 'cagri-reta-10mg'],
      'cagrilintide':             ['cagrilintide-5mg', 'cagrilintide-10mg'],
      'sermorelin':               ['sermorelin-2mg', 'sermorelin-5mg', 'sermorelin-10mg'],
      'tesamorelin':              ['tesamorelin-10mg', 'tesamorelin-20mg'],
      'thymosin-alpha-1':         ['thymosin-alpha-1-5mg', 'thymosin-alpha-1-10mg'],
      'cjc-1295-no-dac':          ['cjc-1295-no-dac-5mg', 'cjc-1295-no-dac-10mg'],
      'aod9604':                  ['aod9604-2mg', 'aod9604-5mg', 'aod9604-10mg'],
      'adipotide-fttp':           ['adipotide-fttp-5mg', 'adipotide-fttp-10mg'],
      'bam-15':                   ['bam-15-30mg-ml-30ml', 'bam-15-50mg-ml-30ml'],
      'l-carnitine':              ['l-carnitine-400mg-ml', 'l-carnitine-600mg-ml', 'l-carnitine-5-pack-600mg'],
      'slu-pp-332-liquid':        ['slu-pp-332-1mg-ml-30ml', 'slu-pp-332-5mg-ml-30ml'],
      'slu-pp-332-capsules':      ['slu-pp-332-1mg-x-30-capsules', 'slu-pp-332-100mg-x-30-capsules', 'slu-pp-332-100mg-x-120-capsules'],
      'ru-58841':                 ['ru-58841-50mg-x-30ml', 'ru-58841-50mg-x-60ml'],
      'epitalon':                 ['epitalon-10mg', 'epitalon-50mg'],
      'ghk-cu':                   ['ghk-cu-50mg', 'ghk-cu-100mg'],
      'nad':                      ['nad-500mg', 'nad-1000mg'],
      'glutathione':              ['glutathione-200mg', 'glutathione-600mg', 'glutathione-1500mg'],
      'mots-c':                   ['mots-c-10mg', 'mots-c-20mg', 'mots-c-40mg'],
      'ss-31':                    ['ss-31-10mg', 'ss-31-25mg', 'ss-31-50mg'],
      'pinealon':                 ['pinealon-10mg', 'pinealon-20mg'],
      'dsip':                     ['dsip-delta-sleep-inducing-peptide-5mg', 'dsip-delta-sleep-inducing-peptide-10mg', 'dsip-delta-sleep-inducing-peptide-15mg'],
      'na-selank-amidate':        ['na-selank-amidate-10mg', 'na-selank-amidate-30mg'],
      'kisspeptin-10':            ['kisspeptin-10-5mg', 'kisspeptin-10-10mg'],
      'oxytocin':                 ['oxytocin-8mg', 'oxytocin-10mg'],
      'vip':                      ['vip-5mg', 'vip-10mg'],
      'kpv':                      ['kpv-5mg', 'kpv-10mg'],
      '5-amino-1mq':              ['5-amino-1mq-5mg', '5-amino-1mq-50mg'],
      'bpc-157-tb-500-blend':     ['bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg', 'bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg'],
      'ipamorelin-tesamorelin-blend': ['ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg', 'ipamorelin-tesamorelin-blend-ipa-5mg-tesa-10mg'],
      'ipamorelin-cjc-1295-blend': ['ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg', 'ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipamorelin-5mg'],
    }

    const variantRedirects = []
    for (const [parent, children] of Object.entries(VARIANT_GROUPS)) {
      for (const child of children) {
        variantRedirects.push({
          source: `/products/${child}`,
          destination: `/products/${parent}`,
          permanent: true,
        })
      }
    }

    return [
      ...variantRedirects,

      // Legacy bare-compound slug redirects — updated to point at new canonical parents.
      { source: '/products/bpc-157',          destination: '/products/bpc-157-10mg',                           permanent: true },
      { source: '/products/tb-500',           destination: '/products/tb-500-thymosin-beta-4-10mg',            permanent: true },
      { source: '/products/melanotan-2',      destination: '/products/melanotan-2-10mg',                       permanent: true },
      { source: '/products/epithalon',        destination: '/products/epitalon',                               permanent: true },
      { source: '/products/ipamorelin',       destination: '/products/ipamorelin-10mg',                        permanent: true },
      { source: '/products/pt-141',           destination: '/products/pt-141-10mg',                            permanent: true },
      { source: '/products/igf-1-lr3',        destination: '/products/igf-1-lr3-1mg',                          permanent: true },
      { source: '/products/selank',           destination: '/products/selank-10mg',                            permanent: true },
      { source: '/products/cjc-1295',         destination: '/products/cjc-1295-no-dac',                        permanent: true },
      { source: '/products/slu-pp-332',       destination: '/products/slu-pp-332-liquid',                      permanent: true },

      // Discontinued SKUs — redirect to closest guide so equity transfers
      { source: '/products/mk-677',           destination: '/mk-677-ibutamoren-guide',                         permanent: true },
      { source: '/products/semax',            destination: '/selank-semax-nootropic-peptide-guide',            permanent: true },

      { source: '/stacks/anti-aging',         destination: '/stacks/longevity',                                permanent: true },

      { source: '/looks-maxing',              destination: '/looksmaxxing-peptides-guide-men',                 permanent: true },
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
