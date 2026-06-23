import SkillList from "../../about/_components/SkillList";

interface SkillGroupProps {
  title: string;
  skills: string[];
  variant?: 'default' | 'primary';
}

export default function SkillGroup({ title, skills, variant = 'default' }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-zinc-400 dark:text-zinc-500">{title}</p>
      <SkillList skills={skills} variant={variant} />
    </div>
  )
}
