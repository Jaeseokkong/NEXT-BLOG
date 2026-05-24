import SkillGroup from './SkillGroup'

const skills: { title: string; skills: string[]; }[] = [
  {
    title: '주력',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native'],
  },
  {
    title: '사용 가능',
    skills: ['Spring Boot', 'Node.js', 'PostgreSQL', 'Oracle', 'MySQL'],
  },
]

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
      {children}
      <span className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="space-y-5">
      <SectionLabel>Skills</SectionLabel>
      <div className="space-y-4">
        {skills.map(({ title, skills }) => (
          <SkillGroup key={title} title={title} skills={skills} />
        ))}
      </div>
    </section>
  )
}
