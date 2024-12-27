'use client'

import { useSearchParams } from 'next/navigation'
import { ProductGrid } from '@/components/products/product-grid'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      <ProductGrid />
    </main>
  )
}

