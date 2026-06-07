import React from 'react'
import { SectionLabel } from './SkillSection';

const careers = [
  {
    company: "윤선생",
    role: "기술본부 · 프론트엔드",
    period: "2023.07 ~ 현재",
    current: true,
    achievements: [
      "Next.js 기반 실시간 API 모니터링 시스템 구축, Cron 1분 주기 자동 감지 및 Slack/Teams 웹훅 알림 자동화",
      "GIF→MP4, WebP 전환 및 Lazy Loading으로 로드 15.93s→2.13s 개선 (이벤트 페이지 기준)",
      "Atomic Design 기반 UI 구조 설계 및 컴포넌트 라이브러리화",
      "LMS 학습 데이터 시각화 및 리포트 시스템 고도화",
    ],
  },
  {
    company: "더리얼",
    role: "IT서비스개발 · 풀스택",
    period: "2021.07 ~ 2023.07",
    current: false,
    achievements: [
      "React Native 앱 무한 스크롤·페이징 도입으로 초기 렌더링 3s→0.7s 단축",
      "App Store / Google Play 배포 및 100명 베타 테스트 운영",
      "PL 역할로 요구사항 200건 관리, 140건 완료",
    ],
  },
];

export default function CareerSection() {
  return (
    <section className="space-y-5">
      <SectionLabel>Career</SectionLabel>
      <div className="relative pl-5 border-l border-zinc-200 dark:border-zinc-800 space-y-8">
        {careers.map((career) => (
          <div key={career.company} className="relative">
            <span className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-900 ${career.current ? 'bg-indigo-500' : 'bg-zinc-400 dark:bg-zinc-600'}`} />
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {career.company}
              </p>
              {career.current && (
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  재직중
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
              {career.role} · {career.period}
            </p>
            <ul className="space-y-2">
              {career.achievements.map((desc) => (
                <li
                  key={desc}
                  className="relative text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

