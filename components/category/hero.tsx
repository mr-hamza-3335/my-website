import Image from 'next/image'

interface CategoryHeroProps {
  title: string
  description: string
  image: string
}

export function CategoryHero({ title, description, image }: CategoryHeroProps) {
  return (
    <section className="relative bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

