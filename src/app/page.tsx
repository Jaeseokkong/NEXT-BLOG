import Header from "@/components/Header";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { fetchAllPosts, fetchCategories } from "@/lib/github";

export default async function Home() {
  const posts = await fetchAllPosts()

  return (
    <>
      <Header />
      <div className="flex py-10">
        <div className="max-w-7xl mx-auto flex flex-row gap-10">
          <Sidebar/>
          <main className="flex-1 overflow-auto px-6">
            <h1 className="text-3xl font-bold mb-6">📌 최신 포스트</h1>
            <PostList posts={posts} />
          </main>
        </div>
      </div>
    </>
  );
}
