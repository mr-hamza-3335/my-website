import Image from 'next/image'
import Link from 'next/link'

const relatedProducts = [
  {
    name: "The Dandy Chair",
    price: "£250",
    image: "/images/dandy-chair.jpg",
    slug: "dandy-chair"
  },
  {
    name: "Rustic Vase Set",
    price: "£155",
    image: "/images/rustic-vase.jpg",
    slug: "rustic-vase-set"
  },
  {
    name: "The Silky Vase",
    price: "£125",
    image: "/images/silky-vase.jpg",
    slug: "silky-vase"
  },
  {
    name: "The Lucy Lamp",
    price: "£399",
    image: "/images/lucy-lamp.jpg",
    slug: "lucy-lamp"
  }
]

export function RelatedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link 
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
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

