import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  
  return (
    <div className="py-8">
      <div className="divide-gray-200 dark:divide-gray-800">
        {posts.map(post => (
          <BlogCard
            key={post.slug}
            {...post}
          />
        ))}
      </div>
    </div>
  );
}

