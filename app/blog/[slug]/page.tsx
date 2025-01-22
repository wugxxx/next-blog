import { getPostBySlug } from '@/lib/posts'
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 模拟异步获取文章数据
async function getPost(slug: string) {
  return getPostBySlug(slug);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
          <span>{post.views} 次阅读</span>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
} 