import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function BrandStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When we started Avion, the idea was simple. Make high quality furniture 
                affordable and available for the mass market.
              </p>
              <p>
                Handmade and lovingly crafted furniture and homeware is what we live, 
                breathe and design so our Chelsea boutique became the hotbed for the 
                London interior design community.
              </p>
            </div>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Get in touch
              </Button>
            </Link>
          </div>
          <div className="relative aspect-[4/3] bg-[#F9F9F9]">
            <Image
              src="/images/brand-story.jpg"
              alt="Modern living room setup"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

