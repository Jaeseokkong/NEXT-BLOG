import { PostResponse } from "@/types/post";

export async function fetchPosts({ page = 1, category }: { page: number, category?: string } ): Promise<PostResponse> {


  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/${category ? category : ""}`);

  if (!res.ok) {
    throw new Error("게시글 데이터를 불러오지 못했습니다.");
  }

  return res.json();
}