import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-[#2D2640] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Modern Furniture for Modern Living
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Discover our curated collection of contemporary furniture pieces designed for your lifestyle.
            </p>
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/Image (2).png"
              alt="Modern chair"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

