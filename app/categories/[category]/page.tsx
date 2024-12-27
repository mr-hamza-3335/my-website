import { notFound } from 'next/navigation';
import { CategoryHero } from '@/components/category/hero';
import { ProductGrid } from '@/components/products/product-grid';
import { categoryData } from '@/lib/category-data';
import { Metadata } from 'next';
import { CategorySelect } from '@/components/category-select';

interface CategoryPageProps {
  params: { category: string };
}

// Generate metadata for the category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categoryData[params.category];
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }
  return {
    title: `${category.title} | Avion Furniture`,
    description: category.description,
  };
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

// Category page component
export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.category];

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-white">
      <CategoryHero
        title={category.title}
        description={category.description}
        image={category.heroImage}
      />
      <div className="container mx-auto px-4 py-16">
        <CategorySelect />
        <h2 className="text-2xl font-bold mb-8">All {category.title}</h2>
        <ProductGrid category={params.category} />
      </div>
    </div>
  );
}
