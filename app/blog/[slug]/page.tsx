import { notFound } from "next/navigation";

// 模拟数据库中的博客文章数据
const posts = [
  {
    title: "A Framework for Evaluating Browser Support",
    content: `
      Lots of exciting new features have been landing in CSS recently, and it can be tough trying to figure out if they're safe to use or not. We might know that a feature is available for 92% of users, but is that sufficient? Where do we draw the line?

      In this blog post, I'll share the framework I use for deciding whether or not to use a modern CSS feature.

      ## Browser Support Considerations

      When evaluating a new CSS feature, we need to consider several factors:
      
      1. Current browser support
      2. Progressive enhancement possibilities
      3. Fallback options
      4. Target audience requirements

      ## Making the Decision

      Here's my step-by-step process for evaluating new features...
    `,
    date: "2024-03-15",
    slug: "evaluating-browser-support",
    readingTime: "5 分钟",
    views: 1234
  },
  {
    title: "理解 React 中的状态管理",
    content: `
      深入探讨 React 应用中的状态管理策略，从 useState 到 Redux，帮助你选择最适合的解决方案。

      ## React 状态管理的演进

      在 React 的发展历程中，状态管理一直是一个核心话题...

      ## 常见的状态管理方案

      1. useState 和 useReducer
      2. Context API
      3. Redux
      4. Zustand
      5. Jotai
    `,
    date: "2024-03-10",
    slug: "react-state-management",
    readingTime: "8 分钟",
    views: 2156
  }
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 模拟异步获取文章数据
async function getPost(slug: string) {
  // 在实际应用中，这里会是一个数据库查询
  const post = posts.find((post) => post.slug === slug);
  return post;
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