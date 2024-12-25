import { BlogHero } from '@/components/blog/hero'
import { FeaturedPosts } from '@/components/blog/featured-posts'
import { BlogGrid } from '@/components/blog/blog-grid'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <FeaturedPosts />
      <BlogGrid />
    </main>
  )
}

