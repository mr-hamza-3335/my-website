import { Metadata } from 'next';

export default function BlogPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Blog ID: {params.id}</p>
    </div>
  );
}

// Generate static parameters for dynamic routes (if needed for SSG)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }, // Example IDs; replace with your data source
  ];
}

// You can also use generateMetadata for meta tags, etc.
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return {
    title: `Blog Post ${params.id}`,
    description: `Details about blog post ${params.id}`,
  };
}
