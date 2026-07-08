import { fetchPostsServer } from "@/lib/api/posts";
import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/constants/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PostsContainer from "./_components/PostsContainer";

export default async function PostsPage() {  
  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.posts, undefined, ""],
    queryFn: ({ pageParam = 1 }) => fetchPostsServer({ page: pageParam }),
    initialPageParam: 1
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <PostsContainer />
       </main>
    </HydrationBoundary>
  )
}