import { fetchPostMetas } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 12;

export async function GET(req: NextRequest) {
  const pageParam = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search")?.toLowerCase() || '';
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const allPosts = await fetchPostMetas(page, PAGE_SIZE);

  const filteredPosts = search
    ? allPosts.filter(post => post.title.toLowerCase().includes(search))
    : allPosts;

  const more = filteredPosts.length === PAGE_SIZE;

  return NextResponse.json({ posts: filteredPosts, more });
}
