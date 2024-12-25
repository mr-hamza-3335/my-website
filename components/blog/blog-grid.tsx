import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

const posts = [
  {
    title: "Creating the Perfect Home Office",
    excerpt: "Tips for designing a productive and stylish workspace at home.",
    image: "/Product Card (1).png",
    date: "March 10, 2024",
    category: "Tips & Tricks"
  },
  {
    title: "Color Psychology in Interior Design",
    excerpt: "How different colors affect mood and atmosphere in your home.",
    image: "/Product Card (2).png",
    date: "March 8, 2024",
    category: "Design Theory"
  },
  {
    title: "The History of Scandinavian Design",
    excerpt: "Exploring the origins and influence of Nordic furniture design.",
    image: "/Product Card (3).png",
    date: "March 5, 2024",
    category: "History"
  },
  {
    title: "Small Space Solutions",
    excerpt: "Clever furniture choices for compact living spaces.",
    image: "/Product Card (4).png",
    date: "March 3, 2024",
    category: "Tips & Tricks"
  },
  {
    title: "Caring for Your Furniture",
    excerpt: "Maintenance tips to keep your pieces looking beautiful.",
    image: "/Product Card (5).png",
    date: "March 1, 2024",
    category: "Maintenance"
  },
  {
    title: "The Rise of Artisanal Furniture",
    excerpt: "Why handcrafted pieces are making a comeback.",
    image: "/Product Card (6).png",
    date: "February 28, 2024",
    category: "Trends"
  }
]

export function BlogGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

