import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import { fetchPostMetas } from "@/lib/github";
import LatestPostsPreview from "@/components/home/LatestPostsPreview";

export default async function Home() {
  const initialPosts = await fetchPostMetas(1, 10);

  return (
    <main className="max-w-5xl lg:mx-auto mx-5 space-y-10 py-6">        
      <AboutPreview />
      <LatestPostsPreview initialPosts={initialPosts}/>
      <ProjectsPreview />
    </main>
  );
}


export const metadata = {
  title: "HJS Blog - 프론트엔드 개발 · Next.js · React 기술 블로그",
  description: "Next.js, React, TypeScript 등을 다루며 프론트엔드 개발 경험과 인사이트를 공유하는 HJS의 기술 블로그입니다",
  openGraph: {
    title: "HJS Blog - 프론트엔드 개발 블로그",
    description: "프론트엔드 개발, Next.js, React 관련 기술과 경험을 공유하는 블로그입니다.",
    url: "https://hjs-blog.vercel.app",
    siteName: "HJS Blog",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://hjs-blog.vercel.app",
  },
}