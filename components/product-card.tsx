import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: string
  image: string
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-start gap-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <Button variant="outline" size="sm" className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

