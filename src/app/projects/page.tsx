import BadgeGroup from "@/components/ui/BadgeGroup";
import TechContainer from "@/components/ui/BadgeGroup";
import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-zinc-900 dark:text-zinc-100">
        🛠️ Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-yellow-600">
              {project.title}
            </h2>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <BadgeGroup labels={project.tech ?? []}  />
              {/* {project.tech?.map((tag: string) => (
                <BadgeGroup labels={tag}  />
              ))} */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
