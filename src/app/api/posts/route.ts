import { fetchPostMetas } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 12;

export async function GET(req: NextRequest) {
  const pageParam = req.nextUrl.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const posts = await fetchPostMetas(page, PAGE_SIZE);

  const hasMore = posts.length === PAGE_SIZE;

  return NextResponse.json({posts, hasMore});
}