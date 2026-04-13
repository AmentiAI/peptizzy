import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

const SHOP_URL = 'https://phiogen.is/?ref=PEPS'

// Build slug → affiliateUrl map from products
const AFFILIATE_MAP: Record<string, string> = {
  shop: SHOP_URL,
  ...Object.fromEntries(products.map(p => [p.slug, p.affiliateUrl])),
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const dest = AFFILIATE_MAP[params.slug] ?? SHOP_URL

  return NextResponse.redirect(dest, {
    status: 302,
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
