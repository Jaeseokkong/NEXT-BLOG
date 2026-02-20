import AboutPreview from "@/components/templates/AboutPreview";
import ProjectsPreview from "@/components/templates/ProjectsPreview";
import { fetchPostMetas } from "@/lib/github";
import LatestPostsPreview from "@/components/templates/LatestPostsPreview";

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
  title: "한재석 | Frontend Engineer · React · Next.js",
  description:
    "React·Next.js 기반 실서비스 운영 경험을 바탕으로 구조 개선, 성능 최적화, 관리자 대시보드 개발 경험을 공유하는 프론트엔드 엔지니어 한재석의 기술 블로그입니다.",

  openGraph: {
    title: "한재석 | Frontend Engineer",
    description:
      "실서비스 운영, 대시보드 설계, 데이터 시각화 경험을 공유하는 프론트엔드 개발자 블로그",
    url: "https://hjs-blog.vercel.app",
    siteName: "한재석 기술 블로그",
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
};