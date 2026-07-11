// import Link from "next/link";
import PreviewSection from "@/components/common/PreviewSection";
import { projects } from "@/app/(site)/portfolio/_data/Portfolio.constans";

export default function PortfolioPreview() {
  const previewProjects = projects.slice(0, 3);

  return (
    <PreviewSection
      title="Projects"
      moreButton={{ href: "/portfolio", label: "전체 보기" }}
    >
      <div className="flex flex-col gap-2 mt-2">
        {previewProjects.map((project) => (
        //   <Link
        //     key={project.slug}
        //     href={`/portfolio/${project.slug}`}
        //     className="group flex items-start justify-between gap-4 py-3 px-1 border-b border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
            //   >
        <div key={project.slug}>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-500 dark:text-indigo-400 shrink-0">
                  {project.company}
                </span>
                <span className="text-sm text-zinc-800 dark:text-zinc-200 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                {project.tags.join(" · ")}
              </p>
            </div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0 pt-0.5">
              {project.period}
            </span>
        </div>
        //   </Link>
        ))}
      </div>
    </PreviewSection>
  );
}