import { ProductGrid } from '@/components/products/product-grid'
import { CategorySelect } from '@/components/category-select'

export default function AllProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <CategorySelect />
      <ProductGrid />
    </div>
  )
}

