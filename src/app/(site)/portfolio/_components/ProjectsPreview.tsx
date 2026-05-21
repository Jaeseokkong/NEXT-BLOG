import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import PreviewSection from "@/components/organisms/PreviewSection";
import BadgeGroup from "@/components/ui/BadgeGroup";

export default function ProjectsPreview() {
  const projects = getAllProjects().slice(0, 4);

  return (
    <PreviewSection
      title="🛠️ Projects"
      context={`프론트엔드 개발자이며, 사용자 경험과 성능에 집중하여 웹 서비스를 만듭니다.\nReact를 주로 사용하며, 사이드 프로젝트와 기술 블로그 작성에도 열정이 있습니다.`}
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

              <span
                className="mt-auto pt-3 flex items-center gap-1 text-xs text-indigo-500 dark:text-indigo-400 font-medium
                opacity-70 group-hover:opacity-100 transition-all duration-300 translate-x-[1px] group-hover:translate-x-0"
              >
                자세히 보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PreviewSection>
  );
}
