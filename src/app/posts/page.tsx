import Intro from "@/components/Intro";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { fetchPosts } from "@/lib/github";


export default async function PostsPage() {
  const initialPosts = await fetchPosts(1);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6">
        <Intro />
        <PostList initialPosts={initialPosts} />
      </div>
    </main>
  )
}