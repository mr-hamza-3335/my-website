import { Button } from "@/components/ui/button"
import Link from "next/link"

const ceramics = [
  {
    id: 1,
    name: "The Dandy chair",
    price: "£250",
    image: "/Right Image.png"
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: "£155",
    image: "/Product Card.png"
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: "£125",
    image: "/Product Card (1).png"
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: "£399",
    image: "/Product Card (2).png"
  }
]

export function NewCeramics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-semibold mb-8">New ceramics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ceramics.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/collection">
            <Button variant="outline" size="lg">
              View collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

