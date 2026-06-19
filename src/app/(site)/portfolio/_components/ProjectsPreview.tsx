import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import PreviewSection from "@/components/common/PreviewSection";
import BadgeGroup from "@/components/ui/BadgeGroup";
import MoreButton from "@/components/ui/MoreButton";

export default function ProjectsPreview() {
const projects = getAllProjects().slice(0, 4);

    return (
        <PreviewSection
            title="Projects"
            moreButton={{ href: "/portfolio", label: "전체 보기" }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {projects.map((project) => (
                <Link
                    key={project.title}
                    href={`/portfolio/${project.slug}`}
                    className="group flex flex-col rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
                >
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                        {project.tech && <BadgeGroup labels={project.tech} />}
                    <MoreButton className="mt-auto pt-3">자세히 보기</MoreButton>
                </Link>
                ))}
            </div>
        </PreviewSection>
    );
}
