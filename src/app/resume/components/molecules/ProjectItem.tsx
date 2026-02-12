import Badge from '@/components/atoms/Badge';
import Text from '@/components/atoms/Text';
import React from 'react'

interface ProjectItemProps {
	title: string;
	description: string;
	highlights: string[];
	techStack: string[];
}

export default function ProjectItem({ title, description, highlights, techStack }: ProjectItemProps) {
	return (
		<div className="break-avoid">
			<Text className="font-semibold text-gray-900">
				{title}
			</Text>
		
			<Text size="sm" className="mt-1">
				{description}
			</Text>

			<ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-700">
				{highlights.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>

			<div className="mt-2 flex flex-wrap gap-2">
				{techStack.map((tech) => (
					<Badge key={tech}>{tech}</Badge>
				))}
			</div>
		</div>
	)
}
