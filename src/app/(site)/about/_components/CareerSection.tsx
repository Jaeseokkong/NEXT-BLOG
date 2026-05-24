import React from 'react'

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
        <div></div>
    )
}
