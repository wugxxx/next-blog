import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { BlogCard } from "@/components/blog-card";

// 模拟分类文章数据
const categoryPosts = {
  javascript: [
    {
      title: "JavaScript 异步编程指南",
      description: "深入理解 Promise、async/await 和异步编程模式",
      date: "2024-03-15",
      slug: "javascript-async-guide",
      readingTime: "10 分钟",
      views: 1234
    },
    // ... 更多文章
  ],
  react: [
    {
      title: "React Hooks 最佳实践",
      description: "学习 React Hooks 的常见用法和注意事项",
      date: "2024-03-10",
      slug: "react-hooks-best-practices",
      readingTime: "8 分钟",
      views: 2345
    },
    // ... 更多文章
  ],
  // ... 其他分类的文章
};

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getCategoryPosts(slug: string) {
  // 在实际应用中，这里会是一个数据库查询
  return categoryPosts[slug as keyof typeof categoryPosts] || [];
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