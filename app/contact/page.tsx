import { ContactForm } from '@/components/contact/form'
import { ContactInfo } from '@/components/contact/info'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#2A254B] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl">We'd love to hear from you. Our friendly team is always here to chat.</p>
        </div>
      </section>
      <ContactForm />
      <ContactInfo />
    </main>
  )
}

