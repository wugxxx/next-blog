import { getAllPosts, Post } from "@/lib/posts"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json([])
  }

  const results = getAllPosts().filter((post: Post) => {
    const titleMatch = post.title.toLowerCase().includes(query.toLowerCase())
    const excerptMatch = post.excerpt?.toLowerCase().includes(query.toLowerCase())
    const contentMatch = post.content?.toLowerCase().includes(query.toLowerCase())
    return titleMatch || excerptMatch || contentMatch
  })

  return NextResponse.json(results)
} 