"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Post } from "@/lib/posts"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<Post[]>([])

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (query.length === 0) {
      setResults([])
      return
    }

    // 简单的客户端搜索实现
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
    const data = await res.json()
    setResults(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] gap-0 p-0 outline-none">
        <DialogHeader className="sr-only">
          <DialogTitle>搜索文章</DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center px-3">
          <svg
            className="mr-2 h-5 w-5 shrink-0 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <Input
            className="h-12 border-0 focus:border-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 shadow-none"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="max-h-[382px] overflow-y-auto p-0">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    {post.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                    {post.excerpt}
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery.length > 0 ? (
            <p className="p-4 text-sm text-gray-500">没有找到相关文章</p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
} 