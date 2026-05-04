import { getPostsData } from "@/lib/posts";
import { PostResponse } from "@/types/post";

export async function fetchPosts({ page = 1, category, search }: { page: number, category?: string, search?: string }): Promise<PostResponse> {
  return await getPostsData({ page, category, search });
}