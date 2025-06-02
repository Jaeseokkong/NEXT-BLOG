import Intro from "@/components/Intro";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

export default async function Home() {

  return (
    <>
      <div className="py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">
          <Sidebar/>
          <main className="flex-1 overflow-auto">
            <Intro />
            <h1 className="text-3xl font-bold mb-6">📌 최신 포스트</h1>
            <PostList />
          </main>
        </div>
      </div>
    </>
  );
}
