import AboutPreview from "@/components/AboutPreview";
import Intro from "@/components/Intro";
import PostList from "@/components/PostList";
import { fetchPostMetas } from "@/lib/github";

export default async function Home() {
  const initialPosts = await fetchPostMetas(1, 10); // 최적화된 fetch 사용

  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">        
        <main className="overflow-auto">
          <Intro />
          <AboutPreview />
          <h1 className="text-3xl font-bold mb-6">📌 최신 포스트</h1>
          <PostList initialPosts={initialPosts} />
        </main>
      </div>
    </div>
  );
}
