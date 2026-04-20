import Link from 'next/link'
import ProductsContent from './ProductsContent'
import { getCanonicalProducts } from '@/lib/variants'

interface Props {
  searchParams?: { category?: string }
}

export default function ProductsPage({ searchParams }: Props) {
  const initialCategory = searchParams?.category ?? 'all'
  const canonical = getCanonicalProducts()
  return (
    <>
      <ProductsContent initialCategory={initialCategory} />
      <nav className="sr-only" aria-label="All products">
        <ul>
          {canonical.map(p => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`}>{p.name} — {p.category}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
