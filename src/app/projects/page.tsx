import BadgeGroup from "@/components/ui/BadgeGroup";
import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-12 flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
        🛠️ Projects
        <span className="text-base font-normal text-zinc-500 dark:text-zinc-400">
          ({projects.length})
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
          >
            {/* 이미지 대신 placeholder */}
            <div className="h-40 w-full bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center">
              <span className="text-sm text-indigo-500 dark:text-indigo-300 font-medium tracking-wide">
                Image coming soon...
              </span>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600">
                {project.title}
              </h2>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 flex-1">
                {project.description}
              </p>

              <div className="mt-auto">
                <BadgeGroup labels={project.tech ?? []} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
