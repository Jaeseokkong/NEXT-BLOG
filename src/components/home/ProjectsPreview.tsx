import Link from "next/link";
import PreviewSection from "../ui/PreviewSection";
import BadgeGroup from "../ui/BadgeGroup";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPreview() {
  const projects = getAllProjects().slice(0, 4);

  return (
    <PreviewSection
      title="🛠️ Projects"
      content={`프론트엔드 개발자이며, 사용자 경험과 성능에 집중하여 웹 서비스를 만듭니다.\nReact와 Next.js를 주로 사용하며, 사이드 프로젝트와 기술 블로그 작성에도 열정이 있습니다.`}
      moreButton={{ href: "/projects", label: "전체 프로젝트 보기" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                {project.description}
              </p>

              {project.tech && <BadgeGroup labels={project.tech} />}

              <span className="mt-auto pt-3 text-xs text-indigo-500 dark:text-indigo-400 font-medium group-hover:underline">
                자세히 보기 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PreviewSection>
  );
}
