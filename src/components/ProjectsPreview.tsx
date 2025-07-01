import Link from 'next/link';

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
		<section className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
			<h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">🛠 Projects</h2>
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
							<div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-300">
								{project.tech.map((t) => (
									<span
										key={t}
										className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded"
									>
										{t}
									</span>
								))}
							</div>
					</Link>
				))}
			</div>

			<div className="mt-4">
        <Link href="/projects" className="text-blue-500 hover:underline text-sm">
          → 전체 프로젝트 보기
        </Link>
      </div>
		</section>
	)
}