import { useInfiniteQuery } from "@tanstack/react-query";
import { MainCategory } from "@/constants/category";
import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/constants/query";
import { fetchPosts } from "@/lib/api/posts";

export function useInfinitePosts(category?: MainCategory, search?: string) {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
		queryKey: [queryKeys.posts, category],
		queryFn: ({ pageParam = 1 }) => fetchPosts({ page: pageParam, category }),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.hasMore ? lastPage.nextPage : undefined;
		}
	});

	const posts = data?.pages.flatMap(page => page.posts) ?? [];

	return {
		posts,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading
	}
}