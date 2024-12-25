import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function ServiceSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/Image (3).png"
              alt="Modern black sofa"
              width={600}
              height={450}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Our service isn't just personal, it's actually hyper-personally exquisite
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
            <Button variant="outline" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

