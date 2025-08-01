import Intro from "@/components/posts/Intro";
import MobileCategoryTabs from "@/components/posts/MobileCategoryTabs";
import PostList from "@/components/posts/PostList";
import Sidebar from "@/components/posts/Sidebar";
import { fetchPosts } from "@/lib/github";


export default async function PostsPage() {
  const { posts: initialPosts } = await fetchPosts(1);
  

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6">
        <Intro />
        <MobileCategoryTabs />
        <PostList initialPosts={initialPosts}/>
      </div>
    </main>
  )
}