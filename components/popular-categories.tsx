import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { name: 'Plant Pots', image: '/images/plant-pots-category.jpg', href: '/categories/plant-pots' },
  { name: 'Ceramics', image: '/images/ceramics-category.jpg', href: '/categories/ceramics' },
  { name: 'Tables', image: '/images/tables-category.jpg', href: '/categories/tables' },
  { name: 'Chairs', image: '/images/chairs-category.jpg', href: '/categories/chairs' },
  { name: 'Crockery', image: '/images/crockery-category.jpg', href: '/categories/crockery' },
  { name: 'Tableware', image: '/images/tableware-category.jpg', href: '/categories/tableware' },
]

export function PopularCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

