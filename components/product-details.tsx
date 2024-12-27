import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProductDetailsProps {
  productSlug: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Mock product data (replace this with your actual data fetching logic)
const products: Product[] = [
  {
    id: '1',
    name: 'Comfortable Chair',
    description: 'A very comfortable chair for your living room.',
    price: 199.99,
    image: '/placeholder.svg?height=400&width=400'
  },
  // Add more products as needed
];

export function ProductDetails({ productSlug }: ProductDetailsProps) {
  const product = products.find(p => p.id === productSlug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <Button>Add to Cart</Button>
      </div>
    </div>
  )
}

