import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  
  return (
    <div className="py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Latest Articles</h1> */}
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

