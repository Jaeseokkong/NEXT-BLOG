import Badge from "@/components/ui/Badge";

interface SkillListProps {
  skills: string[];
  variant?: 'default' | 'primary';
}

export default function SkillList({ skills, variant = 'default' }: SkillListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <li key={skill}>
          <Badge label={skill} variant={variant} />
        </li>
      ))}
    </ul>
  )
}
