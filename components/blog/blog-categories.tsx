import Link from 'next/link'

const categories = [
  { name: 'Interior Design', slug: 'interior-design' },
  { name: 'Furniture Care', slug: 'furniture-care' },
  { name: 'Sustainability', slug: 'sustainability' },
  { name: 'Home Decor', slug: 'home-decor' },
  { name: 'DIY Projects', slug: 'diy-projects' },
]

export function BlogCategories() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link href={`/blog/category/${category.slug}`} className="text-gray-600 hover:text-gray-900">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

