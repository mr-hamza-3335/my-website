import { BlogHero } from '@/components/blog/hero'
import { FeaturedPosts } from '@/components/blog/featured-posts'
import { BlogGrid } from '@/components/blog/blog-grid'
import { BlogCategories } from '@/components/blog/blog-categories'
import { BlogSearch } from '@/components/blog/blog-search'

export default function BlogPage() {
  return (
    <div className="bg-white">
      <BlogHero />
      <FeaturedPosts />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <BlogGrid />
          </div>
          <div>
            <BlogSearch />
            <BlogCategories />
          </div>
        </div>
      </div>
    </div>
  )
}

