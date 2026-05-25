import { SectionLabel } from "./SkillSection"

const projects = [
    {
        title: "공식 웹사이트 내제화 및 최적화",
        stack: "Spring Boot · PostgreSQL · WebP · MP4",
        period: "2025.06 ~",
        descriptions: [
        "GIF→MP4, WebP 전환 및 Lazy Loading으로 전송량 170MB→23.9MB 감소",
        "외주 홈페이지 사내 이관, 기능 수정 사이클 단축",
        ],
        result: "로드 15.93s → 2.13s (이벤트 페이지 기준)",
    },
    {
        title: "전사 API 실시간 모니터링 시스템",
        stack: "Next.js · TypeScript · WebSocket · Cron",
        period: "2025.03 ~ 2025.09",
        descriptions: [
        "22개 분산 서버 상태 WebSocket 실시간 추적",
        "Cron 1분 주기 헬스체크 + Slack/Teams 웹훅 알림 자동화",
        "SSR + CSR 분리 구조로 초기 로딩과 실시간성 동시 확보",
        ],
        result: null,
    },
    {
        title: "여행 기록 SNS 앱 고도화 (NomadNote)",
        stack: "React Native · PHP · MySQL",
        period: "2021.07 ~ 2022.07",
        descriptions: [
        "무한 스크롤·페이징 도입으로 초기 렌더링 3s→0.7s 단축",
        "100명 TestFlight 베타 테스트, App Store · Google Play 출시",
        ],
        result: null,
    },
]

export default function ProjectsSection() {
return (
    <section className="space-y-5">
        <SectionLabel>Projects</SectionLabel>
        <div className="space-y-3">
            {projects.map((project) => (
            <div
                key={project.title}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 space-y-2"
            >
                <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {project.title}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0">
                    {project.period}
                </p>
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{project.stack}</p>
                <ul className="space-y-1">
                {project.descriptions.map((desc) => (
                    <li
                    key={desc}
                    className="relative text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600"
                    >
                    {desc}
                    </li>
                ))}
                </ul>
                {project.result && (
                <span className="inline-block text-xs px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {project.result}
                </span>
                )}
            </div>
            ))}
        </div>
    </section>
    )
}
