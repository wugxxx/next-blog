import Link from "next/link";
import { Clock, Eye } from "lucide-react";

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  readingTime: string;
  views: number;
}

export function BlogCard({ title, description, date, slug, readingTime, views }: BlogPostProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group space-y-4 py-10 first:pt-0 border-b last:border-0">
        <h2 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-current to-current bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
            {title}
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingTime}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {views}
          </span>
        </div>
      </article>
    </Link>
  );
} 