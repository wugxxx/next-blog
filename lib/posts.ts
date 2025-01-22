export interface Post {
  slug: string
  title: string
  date: string
  content: string
  excerpt?: string
  categories?: string[]
  readingTime?: string
  views?: number
}

// 模拟博客文章数据
const posts: Post[] = [
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
    `,
    excerpt: "We might know that a feature is available for 92% of users, but is that sufficient? Where do we draw the line?",
    date: "2024-03-15",
    slug: "evaluating-browser-support",
    readingTime: "5 分钟",
    views: 1234,
    categories: ["css", "browsers"]
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
    excerpt: "深入探讨 React 应用中的状态管理策略，从 useState 到 Redux，帮助你选择最适合的解决方案。",
    date: "2024-03-10",
    slug: "react-state-management",
    readingTime: "8 分钟",
    views: 2156,
    categories: ["react", "javascript"]
  },
  {
    title: "Next.js 15 新特性解析",
    content: `
      探索 Next.js 15 带来的新特性和改进，包括服务器组件、流式渲染等革新性的变化。
      
      ## 主要更新
      
      1. 改进的服务器组件
      2. 更快的构建速度
      3. 新的路由功能
    `,
    excerpt: "探索 Next.js 15 带来的新特性和改进，包括服务器组件、流式渲染等革新性的变化。",
    date: "2024-03-05",
    slug: "nextjs-15-features",
    readingTime: "6 分钟",
    views: 3678,
    categories: ["nextjs", "react"]
  }
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  return posts.find(post => post.slug === slug) || null;
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => 
    post.categories?.includes(category)
  );
} 