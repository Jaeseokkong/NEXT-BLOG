import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { fetchPosts } from "@/lib/github";


export default async function PostsPage() {
  const initialPosts = await fetchPosts(1);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex md:gap-6">
      <div className="md:w-1/4">
        <Sidebar />
      </div>
      <div className="md:flex-1 mt-8 md:mt-0">
        <PostList initialPosts={initialPosts} />
      </div>
    </main>
  )
}