import { HeroSection } from '@/components/hero-section'
import { Features } from '@/components/features'
import { NewCeramics } from '@/components/new-ceramics'
import { ProductGrid } from '@/components/product-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { JoinClub } from '@/components/join-club'
import { BrandStory } from '@/components/brand-story'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Features />
      <NewCeramics />
      <ProductGrid />
      <FeaturedProducts />
      <JoinClub />
      <BrandStory />
      <Newsletter />
      <Footer />
    </main>
  )
}

