import Text from "../atoms/Text";
import Title from "../atoms/Title";

interface ExperienceItemProps {
	company: string;
	role: string;
	period: string;
	achievements: string[];
}


export default function ExperienceItem({ company, role, period, achievements }: ExperienceItemProps) {
	return (
		<div className="space-y-2">
			 <div className="flex justify-between items-baseline">
				<Title level={3}>{company}</Title>
				<Text size="sm" className="text-gray-500">
				{period}
				</Text>
			</div>
			<Text size="sm" className="text-gray-600 font-medium">
				{role}
			</Text>
			<ul className="list-disc pl-5 space-y-1">
				{achievements.map((item, idx) => (
					<li key={idx}>
						<Text size="sm">{item}</Text>
					</li>
				))}
			</ul>
		</div>
	)
}
