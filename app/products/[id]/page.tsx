'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { formatCurrency } from "@/lib/utils"
import { categoryData } from '@/lib/category-data'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const allProducts: Product[] = Object.entries(categoryData).flatMap(([category, data]) => 
  data.featuredProducts.map(product => ({
    ...product,
    category,
    description: `This is a ${product.name} from our ${category} collection. It's a high-quality piece that will enhance any space in your home.`
  }))
);

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchedProduct = allProducts.find(p => p.id === parseInt(params.id))
    if (fetchedProduct) {
      setProduct(fetchedProduct)
    }
  }, [params.id])

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">{formatCurrency(product.price)}</p>
          <p className="mb-6">{product.description}</p>
          <Button onClick={handleAddToCart} className="w-full md:w-auto">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

