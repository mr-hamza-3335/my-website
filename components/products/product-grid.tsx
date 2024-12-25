'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const products = [
  {
    name: "The Dandy Chair",
    price: "£250",
    image: "/Right Image.png",
    slug: "dandy-chair"
  },
  {
    name: "Rustic Vase Set",
    price: "£155",
    image: "/Product Card.png",
    slug: "rustic-vase-set"
  },
  {
    name: "The Silky Vase",
    price: "£125",
    image: "/Product Card (1).png",
    slug: "silky-vase"
  },
  {
    name: "The Lucy Lamp",
    price: "£399",
    image: "/Product Card (2).png",
    slug: "lucy-lamp"
  },
  // Duplicate products to fill grid
  {
    name: "lamp",
    price: "£250",
    image: "/Product Card (3).png",
    slug: "lamp"
  },
  {
    name: "Rustic Vase Set",
    price: "£155",
    image: "/Product Card (4).png",
    slug: "rustic-vase-set-2"
  },
  {
    name: "The Silky Vase",
    price: "£125",
    image: "/Product Card (5).png",
    slug: "silky-vase-2"
  },
  {
    name: "Modern Chair",
    price: "£399",
    image: "/Product Card (6).png",
    slug: "Modern Chair"
  }
]

export function ProductGrid() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('featured')

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">All products</h1>
          <div className="flex gap-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="chairs">Chairs</SelectItem>
                <SelectItem value="vases">Vases</SelectItem>
                <SelectItem value="lamps">Lamps</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium group-hover:underline">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

