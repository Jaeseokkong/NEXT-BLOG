export interface Project {
  id: number
  title: string
  stack: string
  period: string
  descriptions: string[]
  result: string | null
}

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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