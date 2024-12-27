'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/lib/cart-context"
import { categoryData } from '@/lib/category-data'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const allProducts: Product[] = Object.entries(categoryData).flatMap(([category, data]) => 
  data.featuredProducts.map(product => ({
    ...product,
    category
  }))
);

interface ProductGridProps {
  category?: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    let filteredProducts = allProducts

    if (category && category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category)
    }

    setProducts(filteredProducts)
  }, [category])

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  )
}

