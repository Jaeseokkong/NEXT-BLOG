import Link from 'next/link';
import PreviewSection from '../ui/PreviewSection';
import BadgeGroup from '../ui/BadgeGroup';
import { getAllProjects } from '@/lib/projects';

// const projects: Project[] = [
//   {
//     title: "내부 API 헬스 체크 시스템 구축",
// 		description: "회사의 내부 API 상태를 실시간으로 모니터링할 수 있는 대시보드형 헬스 체크 시스템을 개발했습니다.",
// 		tech: ["Next.js", "TypeScript", "Chart.js", "Linux"],
//     link: "/projects/api-health-check",
//   },
//   {
//     title: "D-Book 디지털 교재 서비스 개발",
// 		description: "디지털 교재 플랫폼 **D-Book**의 서비스 기획부터 개발까지 전반을 주도했습니다.",
// 		tech: ["React", "Spring", "Oracle", "Linux"],
//     link: "/projects/d-book-service",
//   },
// 	{
//     title: "RD 리포트 시스템 프론트엔드 리디자인",
// 		description: "기존 RD 교육 리포트 시스템의 프론트엔드를 HTML, JS, CSS 기반으로 개선했습니다.",
// 		tech: ["HTML", "CSS", "JavaScript"],
//     link: "/projects/rd-report-redesign",
//   },
// 	{
//     title: "교사용 학습자 관리 웹 서비스 개발",
// 		description: "교사 전용 웹 기반 학습자 관리 플랫폼의 신규 기능 개발 및 유지보수를 담당했습니다.",
// 		tech: ["Next.js", "TypeScript", "Chart.js", "Linux"],
//     link: "/projects/teacher-dashboard",
//   },
// ];

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