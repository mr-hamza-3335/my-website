import { ProductCard } from "./product-card"

const products = [
  {
    id: 1,
    name: "Modern Chair",
    price: "$299",
    image: "/download (4).jpg"
  },
  {
    id: 2,
    name: "Lounge Chair",
    price: "$399",
    image: "/download (5).jpg"
  },
  {
    id: 3,
    name: "Dining Chair",
    price: "$199",
    image: "/download (6).jpg"
  },
  {
    id: 4,
    name: "Pendant Light",
    price: "$149",
    image: "/download (7).jpg"
  }
]

export function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

