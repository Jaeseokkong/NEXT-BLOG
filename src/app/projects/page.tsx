// app/projects/page.tsx
import Link from "next/link";

const projects = [
  {
    title: "Metacity Stamp",
    description: "전자영수증 기반 스탬프 관리자 페이지 개발",
    slug: "metacity-stamp",
    tags: ["React", "Spring", "JWT"],
  },
  {
    title: "HJS 블로그",
    description: "Next.js로 제작한 개인 블로그",
    slug: "hjs-blog",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  // 추가 프로젝트...
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">
        🛠️ Projects
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-xl bg-white dark:bg-zinc-800 p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
              {project.title}
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
