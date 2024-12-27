import Image from 'next/image'

const testimonials = [
  {
    quote: "We absolutely love our new furniture! The quality is outstanding and it has transformed our living room.",
    author: "Sarah J.",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "The customer service was excellent, and the delivery was prompt. I highly recommend this company!",
    author: "Michael T.",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "The attention to detail in their furniture is amazing. It's both beautiful and functional.",
    author: "Emily R.",
    image: "/images/testimonial-3.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <span className="font-semibold">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

