import { getPostsData } from "@/lib/posts";
import { PostResponse } from "@/types/post";

export async function fetchPostsServer({ page = 1, category, search }: { page: number, category?: string, search?: string }): Promise<PostResponse> {
  return await getPostsData({ page, category, search });
}

export async function fetchPosts({ page = 1, category, search }: { page: number, category?: string, search?: string }): Promise<PostResponse> {
  const query = new URLSearchParams({ page: page.toString() });
  if (category) query.append("category", category);
  if (search) query.append("search", search);

  const res = await fetch(`/api/posts?${query.toString()}`);
  if (!res.ok) throw new Error("게시글 데이터를 불러오지 못했습니다.");
  return res.json();
}