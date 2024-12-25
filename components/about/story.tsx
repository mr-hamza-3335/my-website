import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function AboutStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-[#2A254B] text-white p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              It started with a small idea
            </h2>
            <p className="text-gray-200 mb-6">
              A global brand with local beginnings, our story began in a
              small studio in South London in early 2014
            </p>
            <Button variant="secondary">View collection</Button>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/Image Block.png"
              alt="Yellow chair in modern setting"
              width={600}
              height={450}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

