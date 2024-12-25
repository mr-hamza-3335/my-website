import { ContactHero } from '@/components/contact/hero'
import { ContactForm } from '@/components/contact/form'
import { ContactInfo } from '@/components/contact/info'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </main>
  )
}

