'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react'

const cartItems = [
  {
    id: 1,
    name: "Gray ceramic vase",
    price: 85,
    image: "/Product Image.png",
    description: "A timeless ceramic vase with a modern gray glaze"
  },
  {
    id: 2,
    name: "Rustic white vase",
    price: 55,
    image: "/Product Image (1).png",
    description: "Beautiful clay design fits in any decor piece"
  }
]

export function CartItems() {
  const [quantities, setQuantities] = useState<{[key: number]: number}>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  )

  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.price * (quantities[item.id] || 1)), 0
  )

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Your shopping cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center gap-4">
                      <Input
                        type="number"
                        min="1"
                        value={quantities[item.id]}
                        onChange={(e) => setQuantities({
                          ...quantities,
                          [item.id]: parseInt(e.target.value) || 1
                        })}
                        className="w-20"
                      />
                      <span className="font-medium">£{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 h-fit">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">£{subtotal}</span>
              </div>
              <p className="text-sm text-gray-600">
                Taxes and shipping are calculated at checkout
              </p>
              <Button className="w-full bg-[#2A254B] hover:bg-[#2A254B]/90">
                Go to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

