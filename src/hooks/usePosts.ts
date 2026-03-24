import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api/posts";
import { PostResponse } from "@/types/post";

export function usePosts(page: number = 1, category?: string, initialPosts?: PostResponse) {
  const { data, isLoading  } = useQuery<PostResponse>({
    queryKey: ["posts", page, category],
    queryFn: () => fetchPosts(page, category),
    staleTime: 1000 * 60 * 5,
    initialData: initialPosts
  });

  const posts = data?.posts ?? [];

  return { posts, isLoading };
}