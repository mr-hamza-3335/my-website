import { Card, CardContent } from "@/components/ui/card"

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-[4/3] relative mb-4">
                <img
                  src="/download (8).jpg"
                  alt="Featured chair"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Chairs</h3>
              <p className="text-gray-600">Starting from $299</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="aspect-[4/3] relative mb-4">
                <img
                  src="/download (9).jpg"
                  alt="Featured sofa"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Sofas</h3>
              <p className="text-gray-600">Starting from $899</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

