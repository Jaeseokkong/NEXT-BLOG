import Intro from "@/components/Intro";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { fetchPostMetas } from "@/lib/github";

export default async function Home() {
  const initialPosts = await fetchPostMetas(1, 10); // 최적화된 fetch 사용

  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">
        <Sidebar />
        <main className="overflow-auto">
          <Intro />
          <h1 className="text-3xl font-bold mb-6">📌 최신 포스트</h1>
          <PostList initialPosts={initialPosts} />
        </main>
      </div>
    </div>
  );
}
