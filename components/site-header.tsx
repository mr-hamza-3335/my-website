import Link from "next/link"
import { Search, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = [
  { name: "Plant pots", href: "#" },
  { name: "Ceramics", href: "#" },
  { name: "Tables", href: "#" },
  { name: "Chairs", href: "#" },
  { name: "Crockery", href: "#" },
  { name: "Tableware", href: "#" },
  { name: "Gallery", href: "#" },
]

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Avion</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center space-x-8 py-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

