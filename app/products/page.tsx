import Link from 'next/link'
import ProductsContent from './ProductsContent'
import { products } from '@/lib/products'

export default function ProductsPage() {
  return (
    <>
      <ProductsContent />
      <nav className="sr-only" aria-label="All products">
        <ul>
          {products.map(p => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`}>{p.name} — {p.category}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
