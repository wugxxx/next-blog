import { BlogCard } from "@/components/blog-card";

// 模拟博客数据
const posts = [
  {
    title: "A Framework for Evaluating Browser Support",
    description: "Lots of exciting new features have been landing in CSS recently, and it can be tough trying to figure out if they're safe to use or not. We might know that a feature is available for 92% of users, but is that sufficient? Where do we draw the line?",
    date: "2024-03-15",
    slug: "evaluating-browser-support",
    readingTime: "5 分钟",
    views: 1234
  },
  {
    title: "理解 React 中的状态管理",
    description: "深入探讨 React 应用中的状态管理策略，从 useState 到 Redux，帮助你选择最适合的解决方案。",
    date: "2024-03-10",
    slug: "react-state-management",
    readingTime: "8 分钟",
    views: 2156
  },
  {
    title: "Next.js 15 新特性解析",
    description: "探索 Next.js 15 带来的新特性和改进，包括服务器组件、流式渲染等革新性的变化。",
    date: "2024-03-05",
    slug: "nextjs-15-features",
    readingTime: "6 分钟",
    views: 3678
  }
];

export default function Home() {
  return (
    <div className="py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Latest Articles</h1> */}
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

