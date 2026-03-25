import { fetchPostMetas } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 12;

export async function GET(req: NextRequest) {
  const pageParam = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search")?.toLowerCase() || '';
  const category = req.nextUrl.searchParams.get("category");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const allPosts = await fetchPostMetas(page, PAGE_SIZE);

  const filteredPosts = allPosts.filter(post => {
    const matchSearch = search
      ? post.title.toLowerCase().includes(search)
      : true;

    const matchCategory = category
      ? post.category === category
      : true;

    return matchSearch && matchCategory;
  });

  const more = filteredPosts.length === PAGE_SIZE;

  return NextResponse.json({ posts: filteredPosts, more });
}
