import Intro from "@/components/atoms/Intro";
import MobileCategoryTabs from "@/components/posts/MobileCategoryTabs";
import PostsContainer from "@/components/posts/PostsContainer";
import ScrollToTopButton from "@/components/posts/ScrollToTopButton";
import Sidebar from "@/components/molecules/Sidebar";
import { fetchPosts } from "@/lib/api/posts";
import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/constants/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function PostsPage() {  
  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.posts, undefined, ""],
    queryFn: ({ pageParam = 1 }) => fetchPosts({ page: pageParam }),
    initialPageParam: 1
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-6">
          <Intro />
          <MobileCategoryTabs />
          <PostsContainer />
        </div>
        <ScrollToTopButton />
      </main>
    </HydrationBoundary>
  )
}