import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-32 text-center">
      <h2 className="text-3xl font-bold mb-4">404 - 页面未找到</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        抱歉，您访问的页面不存在。
      </p>
      <Link 
        href="/" 
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        返回首页
      </Link>
    </div>
  );
} 