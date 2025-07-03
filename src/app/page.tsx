import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import { fetchPostMetas } from "@/lib/github";
import LatestPostsPreview from "@/components/home/LatestPostsPreview";

export default async function Home() {
  const initialPosts = await fetchPostMetas(1, 10); // 최적화된 fetch 사용

  return (
    <main className="max-w-5xl lg:mx-auto mx-5 space-y-10 py-6">        
      <AboutPreview />
      <LatestPostsPreview initialPosts={initialPosts}/>
      <ProjectsPreview />
    </main>
  );
}
