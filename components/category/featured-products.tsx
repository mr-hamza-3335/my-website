import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: string
  image: string
}

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2 group-hover:underline">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </Link>
              <Button className="mt-4 w-full">Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

