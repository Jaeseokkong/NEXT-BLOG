import { MainCategory } from "@/constants/category";
import { getPostsData } from "@/lib/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
  const search = req.nextUrl.searchParams.get("search") || undefined;
  const category = req.nextUrl.searchParams.get("category") as MainCategory || undefined;

  const data = await getPostsData({ page, category, search });
  return NextResponse.json(data);
}
