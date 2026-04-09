import { getAllPostPaths } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 12;

export async function GET(req: NextRequest) {
  const pageParam = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search")?.toLowerCase() || '';
  const category = req.nextUrl.searchParams.get("category");
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  let more = false;

  let trees = await getAllPostPaths();
  let n = trees.length

  // 카테고리 필터링
  if (category) {
    trees = trees.filter((tree) => tree.path.startsWith(`${category}`));
  }

  // 검색 필터링
  if (search) {
    trees = trees.filter((tree) => tree.path.toLocaleLowerCase().includes(search));
  }

  // 파일 이름에서 날짜 추출
  const getDate = (path: string) => {
    const paths = path.split("/");
    let name = paths[paths.length - 1];
    const [y, m, d] = name.split("-").map(Number);
    return new Date(y, m - 1, d).getTime();
  }

  // 최신순으로 정렬
  trees.sort((a, b) => getDate(b.path) - getDate(a.path));

  const start = (page - 1) * PAGE_SIZE;
  const selectedFiles = trees.slice(start, start + PAGE_SIZE + 1);

  if (n > start + PAGE_SIZE + 1) more = true;

  return NextResponse.json({
    posts: selectedFiles,
    more: more,
  });
}
