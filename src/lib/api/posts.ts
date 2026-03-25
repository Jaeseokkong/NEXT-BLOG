import { PostResponse } from "@/types/post";

export async function fetchPosts({ page = 1 }: { page: number }): Promise<PostResponse> {
  const query = new URLSearchParams({
    page: page.toString(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?${query.toString()}`);

  if (!res.ok) {
    throw new Error("게시글 데이터를 불러오지 못했습니다.");
  }

  return res.json();
}

export async function fetchPostsByCategory({ page = 1, category }: { page: number, category: string }): Promise<PostResponse> {
  const query = new URLSearchParams({
    page: page.toString(),
    category: category
  })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?${query.toString()}`);

  if (!res.ok) {
    throw new Error(`${category}의 게시글 데이터를 불러오지 못했습니다.`);
  }

  return res.json();
}