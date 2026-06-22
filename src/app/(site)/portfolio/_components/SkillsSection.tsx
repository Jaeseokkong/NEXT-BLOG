import { skills } from "@/constants/portfolio"
import SkillGroup from "../../about/_components/SkillGroup"

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
        <SkillGroup title="주력" skills={skills.주력} variant="primary" />
        <SkillGroup title="사용 가능" skills={skills["사용 가능"]} variant="default" />
      </div>
    </section>
  )
}
