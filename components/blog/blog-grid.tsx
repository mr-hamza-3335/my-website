import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDate } from '@/lib/utils'

const posts = [
  {
    id: 1,
    title: "Creating the Perfect Home Office",
    excerpt: "Tips for designing a productive and stylish workspace at home.",
    image: "/images/home-office.jpg",
    date: "2024-03-10",
    category: "Tips & Tricks",
    slug: "creating-the-perfect-home-office"
  },
  {
    id: 2,
    title: "Color Psychology in Interior Design",
    excerpt: "How different colors affect mood and atmosphere in your home.",
    image: "/images/color-psychology.jpg",
    date: "2024-03-08",
    category: "Design Theory",
    slug: "color-psychology-in-interior-design"
  },
  {
    id: 3,
    title: "The History of Scandinavian Design",
    excerpt: "Exploring the origins and influence of Nordic furniture design.",
    image: "/images/scandinavian-design.jpg",
    date: "2024-03-05",
    category: "History",
    slug: "history-of-scandinavian-design"
  },
  {
    id: 4,
    title: "Small Space Solutions",
    excerpt: "Clever furniture choices for compact living spaces.",
    image: "/images/small-space.jpg",
    date: "2024-03-03",
    category: "Tips & Tricks",
    slug: "small-space-solutions"
  },
  {
    id: 5,
    title: "Caring for Your Furniture",
    excerpt: "Maintenance tips to keep your pieces looking beautiful.",
    image: "/images/furniture-care.jpg",
    date: "2024-03-01",
    category: "Maintenance",
    slug: "caring-for-your-furniture"
  },
  {
    id: 6,
    title: "The Rise of Artisanal Furniture",
    excerpt: "Why handcrafted pieces are making a comeback.",
    image: "/images/artisanal.jpg",
    date: "2024-02-28",
    category: "Trends",
    slug: "rise-of-artisanal-furniture"
  }
]

export function BlogGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

