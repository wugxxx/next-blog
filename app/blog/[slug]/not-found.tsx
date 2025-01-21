import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">文章未找到</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        抱歉，您要查看的文章不存在或已被删除。
      </p>
      <p>
        <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
        >
            返回首页
        </Link>
      </p>
    </div>
  );
} 