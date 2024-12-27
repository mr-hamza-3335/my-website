import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredPosts = [
  {
    title: "The Art of Minimalist Living",
    excerpt: "Discover how minimalist furniture can transform your living space and mindset.",
    image: "/images/minimal-living.jpg",
    date: "March 15, 2024",
    category: "Interior Design"
  },
  {
    title: "Sustainable Furniture Trends",
    excerpt: "Exploring eco-friendly materials and sustainable production methods.",
    image: "/images/sustainable-furniture.jpg",
    date: "March 12, 2024",
    category: "Sustainability"
  }
]

export function FeaturedPosts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

