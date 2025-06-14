import { fetchPostMetas } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pageParam = req.nextUrl.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const posts = await fetchPostMetas(page, 10);

  return NextResponse.json(posts);
}