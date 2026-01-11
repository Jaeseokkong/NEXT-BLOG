import Badge from "../atoms/Badge";

interface SkillListProps {
	skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
	return (
		<ul className="flex flex-wrap gap-2">
			{skills.map(skill => (
				<li key={skill}>
					<Badge>{skill}</Badge>
				</li>
			))}
		</ul>
	)
}
