import Image from 'next/image'
import { notFound } from 'next/navigation'

const posts = [
  {
    id: 1,
    title: "Creating the Perfect Home Office",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home-office.jpg",
    date: "March 10, 2024",
    category: "Tips & Tricks"
  },
  // Add more posts here...
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-sm text-gray-600">
        <span>{post.category}</span> • <span>{post.date}</span>
      </div>
      <div className="relative aspect-[16/9] mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose max-w-none">
        {post.content}
      </div>
    </article>
  )
}

