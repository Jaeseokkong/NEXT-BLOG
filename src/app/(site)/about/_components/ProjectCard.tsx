import { Project } from "@/app/(site)/about/_data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 space-y-2">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {project.title}
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0">
          {project.period}
        </p>
      </div>
      <p className="text-xs text-zinc-400 dark:text-zinc-500">{project.stack}</p>
      <ul className="space-y-1">
        {project.descriptions.map((desc) => (
          <li
            key={desc}
            className="relative text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600"
          >
            {desc}
          </li>
        ))}
      </ul>
      {project.result && (
        <span className="inline-block text-xs px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
          {project.result}
        </span>
      )}
    </div>
  )
}
