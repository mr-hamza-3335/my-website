'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"

export function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('small')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const product = {
    id: 1,
    name: "The Dandy Chair",
    price: 250,
    image: "/images/dandy-chair.jpg"
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative aspect-square bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl">£{product.price}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="size" className="block text-sm font-medium mb-2">
                  Size
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                  Quantity
                </label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full bg-[#2A254B] hover:bg-[#2A254B]/90" onClick={handleAddToCart}>
              Add to cart
            </Button>

            <div className="prose prose-sm">
              <h2 className="text-lg font-semibold">Description</h2>
              <p>
                A timeless design, with premium materials features as one of our most
                popular and iconic pieces. The dandy chair is perfect for any stylish
                living space with its classic design and premium materials.
              </p>
              <ul className="mt-4">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

