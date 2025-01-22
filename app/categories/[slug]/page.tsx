import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { BlogCard } from "@/components/blog-card";
import { getPostsByCategory } from '@/lib/posts'

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getCategoryPosts(slug: string) {
  return getPostsByCategory(slug);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    notFound();
  }

  const posts = await getCategoryPosts(slug);

  return (
    <div className="py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
      </header>

      <div className="divide-gray-200 dark:divide-gray-800">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            {...post}
          />
        ))}
      </div>
    </div>
  );
} 