import Link from 'next/link';
import PreviewSection from '../ui/PreviewSection';
import BadgeGroup from '../ui/BadgeGroup';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPreview() {
	const projects = getAllProjects().slice(0, 4);

	return (
		<PreviewSection 
			title="🛠️ Projects"
			content={`프론트엔드 개발자이며, 사용자 경험과 성능에 집중하여 웹 서비스를 만듭니다.\nReact와 Next.js를 주로 사용하며, 사이드 프로젝트와 기술 블로그 작성에도 열정이 있습니다.`}
			moreButton={{ href:"/projects", label: "→ 전체 프로젝트 보기"}}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{projects.map((project) => (
					<Link 
						key={project.title} 
						href={`/projects/${project.title}`}
            className="block bg-white dark:bg-zinc-900 rounded-lg p-4 hover:shadow-md transition"
					>
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-300 mb-2">
							{project.title}
						</h3>
            	<p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">{project.description}</p>
							{project.tech && 	<BadgeGroup labels={project.tech}/>}							
					</Link>
				))}
			</div>
		</PreviewSection>
	)
}