import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit us",
    details: ["123 Furniture Street", "London, UK SW1A 1AA"]
  },
  {
    icon: Phone,
    title: "Call us",
    details: ["+44 (0) 123 456 7890", "Mon-Fri from 8am to 5pm"]
  },
  {
    icon: Mail,
    title: "Email us",
    details: ["contact@avion.com", "We'll reply within 24 hours"]
  },
  {
    icon: Clock,
    title: "Working hours",
    details: ["Monday to Friday", "8:00 AM - 5:00 PM"]
  }
]

export function ContactInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <item.icon className="h-8 w-8 text-[#2A254B]" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

