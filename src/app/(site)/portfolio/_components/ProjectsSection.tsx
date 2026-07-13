// import Link from 'next/link'
import { SectionLabel } from './SkillsSection'
import { projects } from '@/constants/portfolio'

export default function ProjectsSection() {
  return (
    <section className="space-y-5">
      <SectionLabel>Projects</SectionLabel>
      <div className="space-y-3">
        {projects.map((project) => (
          // <Link
          //   key={project.slug}
          //   href={`/portfolio/${project.slug}`}
          //   className="block bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 space-y-2 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
          // >
          <div
            key={project.slug}
            className="block bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 space-y-2 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {project.title}
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0">
                {project.period}
              </p>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {project.tags.join(" · ")}
            </p>
            <ul className="space-y-1">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="relative text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          // </Link>
        ))}
      </div>
    </section>
  )
}
