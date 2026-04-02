import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api/posts";
import { PostResponse } from "@/types/post";
import { queryKeys } from "@/constants/query";
import { MainCategory } from "@/constants/category";

export function usePosts(page: number = 1, category?: MainCategory, search?: string, initialPosts?: PostResponse) {
  const fallback = {
    posts: [],
    more: false
  }
  const { data = fallback, isLoading  } = useQuery<PostResponse>({
    queryKey: [queryKeys.posts, page, category],
    queryFn: () => fetchPosts({ page, category, search }),
    staleTime: 1000 * 60 * 5,
    initialData: initialPosts
  });

  const posts = data.posts;
  const more = data.more;
  return { posts, more, isLoading };
}