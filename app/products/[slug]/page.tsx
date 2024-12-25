import { ProductDetail } from '@/components/products/product-detail'
import { RelatedProducts } from '@/components/products/related-products'
import { JoinClub } from '@/components/join-club'

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductDetail />
      <RelatedProducts />
      <JoinClub />
    </main>
  )
}

