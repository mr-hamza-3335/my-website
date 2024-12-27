import { AboutHero } from '@/components/about/hero'
import { AboutStory } from '@/components/about/story'
import { AboutValues } from '@/components/about/values'
import { ServiceSection } from '@/components/about/section'
import { JoinClub } from '@/components/join-club'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <ServiceSection />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Our Collection</h2>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button variant="default" size="lg">View Collection</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
      <JoinClub />
    </div>
  )
}

