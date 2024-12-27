'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  description: string
  quantity: number
}

export function CartItems() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gray ceramic vase",
      price: 85,
      image: "/images/gray-vase.jpg",
      description: "A timeless ceramic vase with a modern gray glaze",
      quantity: 1
    },
    {
      id: 2,
      name: "Rustic white vase",
      price: 55,
      image: "/images/rustic-vase.jpg",
      description: "Beautiful clay design fits in any decor piece",
      quantity: 1
    }
  ])

  const router = useRouter()

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleCheckout = () => {
    // Here you would typically send the cart data to your backend
    console.log('Proceeding to checkout with items:', cartItems)
    router.push('/checkout')
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Your shopping cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
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
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-20"
                        />
                        <span className="font-medium">£{item.price}</span>
                        <Button variant="outline" onClick={() => removeItem(item.id)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
              <Button 
                className="w-full bg-[#2A254B] hover:bg-[#2A254B]/90"
                onClick={handleCheckout}
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

