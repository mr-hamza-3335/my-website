import { Award, Package, Truck, Clock } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: Package,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: Truck,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: Clock,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable"
  }
]

export function AboutValues() {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What makes us different
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

