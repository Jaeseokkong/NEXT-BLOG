import Intro from "@/components/atoms/Intro";
import MobileCategoryTabs from "@/components/posts/MobileCategoryTabs";
import PostsContainer from "@/components/posts/PostsContainer";
import ScrollToTopButton from "@/components/posts/ScrollToTopButton";
import Sidebar from "@/components/molecules/Sidebar";
import { fetchPosts } from "@/lib/api/posts";

export default async function PostsPage() {  
  const initialPosts = await fetchPosts({ page: 1 });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6">
        <Intro />
        <MobileCategoryTabs />
        <PostsContainer initialPosts={initialPosts} />
      </div>
      <ScrollToTopButton />
    </main>
  )
}