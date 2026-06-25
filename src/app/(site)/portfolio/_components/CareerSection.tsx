import { careers } from '@/constants/portfolio'
import { SectionLabel } from './SkillsSection'

export default function CareerSection() {
  return (
    <section className="space-y-5">
      <SectionLabel>Career</SectionLabel>
      <div className="relative pl-5 border-l border-zinc-200 dark:border-zinc-800 space-y-8">
        {careers.map((career) => (
          <div key={career.company} className="relative">
            <span className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-900 ${career.current ? 'bg-indigo-500' : 'bg-zinc-400 dark:bg-zinc-600'}`} />
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {career.company}
              </p>
              {career.current && (
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  재직중
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
              {career.role} · {career.period}
            </p>
            <ul className="space-y-2">
              {career.descriptions.map((desc) => (
                <li
                  key={desc}
                  className="relative text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
