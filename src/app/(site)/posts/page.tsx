import { fetchPostsServer } from "@/lib/api/posts";
import { queryClient } from "@/lib/queryClient";
import { queryKeys } from "@/constants/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Intro from "./_components/Intro";
import MobileCategoryTabs from "./_components/MobileCategoryTabs";
import PostsContainer from "./_components/PostsContainer";
import { Sidebar } from "lucide-react";
import ScrollToTopButton from "./_components/ScrollToTopButton";

export default async function PostsPage() {  
  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.posts, undefined, ""],
    queryFn: ({ pageParam = 1 }) => fetchPostsServer({ page: pageParam }),
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