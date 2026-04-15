import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api/posts";
import { PostResponse } from "@/types/post";
import { queryKeys } from "@/constants/query";
import { MainCategory } from "@/constants/category";

export function usePosts(category?: MainCategory, search?: string) {
  const fallback = {
    posts: [],
    more: false
  }
  return useInfiniteQuery({
    queryKey: [queryKeys.posts, category, search],
    queryFn: ({ pageParam }) => fetchPosts({ page: pageParam, category, search }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.more) return undefined;
      return allPages.length + 1;
    },
    staleTime: 1000 * 60 * 5,
  });
}