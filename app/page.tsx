import { HeroSection } from '@/components/hero-section'
import { BrandStory } from '@/components/brand-story'
import { Features } from '@/components/features'
import { JoinClub } from '@/components/join-club'
import { Testimonials } from '@/components/testimonials'
import { InstagramFeed } from '@/components/instagram-feed'
import { PopularCategories } from '@/components/popular-categories'
import { LatestBlogPosts } from '@/components/latest-blog-posts'

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Features />
      <PopularCategories />
      <BrandStory />
      <Testimonials />
      <LatestBlogPosts />
      <JoinClub />
      <InstagramFeed />
    </div>
  )
}

