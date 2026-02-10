import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title'
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

interface PersonalItemProps {
	title: string;
	description: string;
	highlights?: string[];
	link?: string;
}
export default function PersonalItem({ title, description, highlights, link }: PersonalItemProps) {
	return (
		<div>
			<div className="flex items-center gap-2">
				<Title level={3}>{title}</Title>
				{link && (
					<Link
						href={link}
						target="_blank"
						className="text-gray-500 hover:text-gray-700"
					>
						<LuExternalLink size={14} />
					</Link>
				)}
			</div>

			

			<Text size="sm" className="mt-1">
				{description}
			</Text>

			{highlights && (
				<ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-700">
					{highlights.map((item, idx) => (
						<li key={idx}>
							<Text size="sm">{item}</Text>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
