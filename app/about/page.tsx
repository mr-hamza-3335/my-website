import { AboutHero } from '@/components/about/hero'
import { AboutStory } from '@/components/about/story'
import { AboutValues } from '@/components/about/values'
import { ServiceSection } from '@/components/about/section'
import { JoinClub } from '@/components/join-club'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <ServiceSection />
      <JoinClub />
    </main>
  )
}

