import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";

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
				<Text color="primary" size="sm" className="text-gray-500">
					{period}
				</Text>
			</div>
			<Text color="primary" size="sm" className="text-gray-600 font-medium">
				{role}
			</Text>
			<ul className="list-disc pl-5 space-y-1">
				{achievements.map((item, idx) => (
					<li key={idx}>
						<Text color="primary" size="sm">{item}</Text>
					</li>
				))}
			</ul>
		</div>
	)
}
