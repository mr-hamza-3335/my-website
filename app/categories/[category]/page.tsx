import { notFound } from 'next/navigation'
import { CategoryHero } from '@/components/category/hero'
import { ProductGrid } from '@/components/products/product-grid'
import { categoryData } from '@/lib/category-data'
import { Metadata } from 'next'
import { CategorySelect } from '@/components/category-select'

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categoryData[params.category]
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }
  return {
    title: `${category.title} | Avion Furniture`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category]

  if (!category) {
    notFound()
  }

  return (
    <div className="bg-white">
      <CategoryHero 
        title={category.title} 
        description={category.description} 
        image={category.heroImage}
      />
      <div className="container mx-auto px-4 py-16">
        <CategorySelect />
        <h2 className="text-2xl font-bold mb-8">All {category.title}</h2>
        <ProductGrid category={params.category} />
      </div>
    </div>
  )
}

