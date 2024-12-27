import { Inter } from 'next/font/google'
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { CartProvider } from '@/lib/cart-context'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Avion - Modern Furniture Store",
  description: "Discover our curated collection of contemporary furniture pieces.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <SiteHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

