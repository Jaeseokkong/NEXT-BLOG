import Text from "../atoms/Text";
import Title from "../atoms/Title";

interface ExperienceItemProps {
	company: string[];
	role: string;
	period: string;
	descriptions: string[];
}


export default function ExperienceItem({ company, role, period, descriptions }: ExperienceItemProps) {
	return (
		<div className="space-y-2">
			<div className="flex items-baseline justify-between">
				<Title level={3}>{company}</Title>
				<Text size="sm" className="text-gray-500">
					{period}
				</Text>
				<Text size="sm" className="text-gray-600">
					{role}
				</Text>
				<ul className="list-disc pl-4 space-y-1">
					{descriptions.map((desc, idx) => (
					<li key={idx}>
						<Text size="sm">{desc}</Text>
					</li>
					))}
				</ul>
			</div>
		</div>
	)
}
