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
  },
  {
    title: "A Friendly Introduction to Container Queries",
    content: `
      As I said in the introduction, container queries have been surprisingly underutilized. Very few of the devs I’ve spoken with have actually started using them regularly in their work.

    One of the core reasons for this is that container queries are complicated, and my goal with this blog post is to help clarify them. But I think there’s another big reason why container queries haven’t been adopted, something we haven’t talked about yet.

    As developers, we implement the mockups that designers prepare for us. This has always been a back-and-forth, a negotiation between what the designers want and what the developers can implement. And for almost 20 years now, we’ve made it clear that “responsive design” was limited to the viewport.

    I don’t think most designers are even aware that they have this exciting new capability. It’s our job to share these developments with them, so that they can use them in their designs!

    For the projects I work on (this blog and my course platform), I’m both the developer and the designer. I have no excuse. When I redesigned my blog over the summer, I made a conscious effort to use container queries. And once I started thinking in terms of containers, I kept seeing opportunities to use them!
    `,
    excerpt: "For a very long time, the most-requested CSS feature has been container queries. That’s been our holy grail, the biggest missing piece in the CSS toolkit.",
    date: "2024-04-05",
    slug: "introduction-to-container-queries",
    readingTime: "2 分钟",
    views: 2245,
    categories: ["javascript", "css"]
  },
  {
    title: "为什么JQuery会被淘汰？",
    content: `
    现在我们可以回答这位面试官的问题了：JQuery属于命令式框架，Vue属于声明式框架。在理论上，声明式代码性能是不优于命令式代码性能的，甚至差于命令式代码的性能。但是声明式框架无需用户手动操作DOM，用户只需关注数据的变化。声明式框架在牺牲了一点性能的情况下，大大降低了开发难度，提高了项目的可维护性，且声明式框架通常使用虚拟DOM的方式，使其在更新页面时的性能大大提升。综合来说，声明式框架仍旧是更好的选择
    `,
    excerpt: `曾经面试时碰到过一个问题：为什么现有的Vue框架开发可以淘汰之前的JQuery？
    我回答：Vue框架无需自己操作DOM，可以避免自己频繁的操作DOM
    面试官接着反问我：Vue框架无需自己操作DOM，有什么优势吗，不用操作DOM就一定是好的吗？
    我懵了，在我的认知里Vue框架无需自己操作DOM性能是一定优于自己来操作DOM元素的，其实并不是的.....
    `,
    date: "2024-03-22",
    slug: "why-jquery-is-obsolete",
    readingTime: "3 分钟",
    views: 2289,
    categories: ["javascript", "css"]
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