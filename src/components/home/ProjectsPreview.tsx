import Link from 'next/link';
import PreviewSection from '../ui/PreviewSection';
import TechContainer from '../ui/TechContainer';

type Project = {
	title: string;
	description: string;
	tech: string[];
	link: string;
}

const projects: Project[] = [
  {
    title: 'DevLog',
    description: 'Next.js 기반 개발 블로그 플랫폼. GitHub 연동, 태그 기능 포함.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: '/projects/devlog',
  },
  {
    title: 'NoteSync',
    description: 'Electron + React로 만든 로컬/클라우드 메모 동기화 앱.',
    tech: ['Electron', 'React', 'Firebase'],
    link: '/projects/notesync',
  },
];

export default function ProjectsPreview() {
	return (
		<PreviewSection 
			title="🛠 Projects"
			content={`프론트엔드 개발자이며, 사용자 경험과 성능에 집중하여 웹 서비스를 만듭니다.\nReact와 Next.js를 주로 사용하며, 사이드 프로젝트와 기술 블로그 작성에도 열정이 있습니다.`}
			moreButton={{ href:"/projects", label: "→ 전체 프로젝트 보기"}}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{projects.map((project) => (
					<Link 
						key={project.title} 
						href={project.link}
            className="block bg-white dark:bg-zinc-900 rounded-lg p-4 hover:shadow-md transition"
					>
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-300 mb-2">
							{project.title}
						</h3>
            	<p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">{project.description}</p>
							<TechContainer techList={project.tech}/>
					</Link>
				))}
			</div>
		</PreviewSection>
	)
}