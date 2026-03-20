import { PostResponse } from "@/types/post";

export async function fetchPosts(page: number = 1, category?: string): Promise<PostResponse> {
  const query = new URLSearchParams({
    page: page.toString(),
  });

  if (category) {
    query.append("category", category);
  }

  const res = await fetch(`/api/posts?${query.toString()}`);

  if (!res.ok) {
    throw new Error("게시글 데이터를 불러오지 못했습니다.");
  }

  return res.json();
}