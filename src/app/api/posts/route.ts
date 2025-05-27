import { fetchAllPostsPaginated } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get("page") ?? "1");
  const limit = 10;

  const posts = await fetchAllPostsPaginated(page, limit);
  return NextResponse.json(posts);
}