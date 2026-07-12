export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  company: string;
  tags: string[];
  highlights: string[];
  description: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "yoons-time",
    title: "가맹 상담 예약 시스템 내제화 (Yoons time)",
    subtitle: "외부 솔루션 의존을 제거하고 사내 시스템으로 전환",
    period: "2025.10 ~ 2026.04",
    company: "윤선생",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    highlights: [
      "실시간 연락처 인증 및 커스텀 일정 관리 구현",
      "공휴일 Open API 연동, 예약 가능 일시 계산 로직 개발",
      "외부 솔루션 의존도 제거로 운영 효율 개선",
    ],
    description:
      "기존 외부 솔루션으로 운영하던 가맹 상담 예약 시스템을 사내로 내제화한 프로젝트. 실시간 인증, 커스텀 일정 관리, 메일 자동화 등 기존 솔루션의 한계를 넘는 기능을 직접 설계 및 구현했습니다.",
  },
  {
    slug: "yoonsun-homepage",
    title: "공식 웹사이트 내제화 및 최적화",
    subtitle: "외주 운영 홈페이지를 사내로 이관하고 성능 전면 개선",
    period: "2025.06 ~",
    company: "윤선생",
    tags: ["Spring Boot", "PostgreSQL", "WebP", "MP4"],
    highlights: [
      "전송량 170MB → 23.9MB 감소 (이벤트 페이지 기준)",
      "로드 시간 15.93s → 2.13s 개선 (이벤트 페이지 기준)",
      "상담 신청-가입 전환 데이터 추출로 마케팅 지표 제공",
    ],
    description:
      "외주로 관리하던 공식 홈페이지를 사내로 이관하고 성능을 전면 개선한 프로젝트. GIF→MP4, 이미지→WebP 전환과 Lazy Loading 적용으로 리소스를 최적화하고, 데이터 기반 지표 제공으로 운영 효율성을 높였습니다.",
  },
  {
    slug: "health-checker",
    title: "전사 API 실시간 모니터링 시스템 (Health Checker)",
    subtitle: "수동 확인 방식을 자동화된 감지·알림 체계로 전환",
    period: "2025.03 ~ 2025.09",
    company: "윤선생",
    tags: ["Next.js", "TypeScript", "WebSocket", "Cron"],
    highlights: [
      "22개 분산 서버 상태 WebSocket 실시간 동기화",
      "Cron 1분 주기 헬스체크 자동화, Slack/Teams 웹훅 즉시 알림",
      "SSR 선인출 + CSR 분리로 로딩 속도와 실시간성 동시 확보",
    ],
    description:
      "사내 22개 분산 서버의 가동 상태를 실시간으로 추적하고 장애 발생 시 즉각 대응하는 모니터링 파이프라인을 구축했습니다. 기존 수동 확인 방식을 자동화된 감지·알림 체계로 전환했습니다.",
  },
  {
    slug: "lms-report",
    title: "학습자 맞춤형 LMS 리포트 고도화",
    subtitle: "단일 스크립트 구조를 모듈형으로 전환",
    period: "2024.07 ~ 2025.02",
    company: "윤선생",
    tags: ["JavaScript", "Chart.js"],
    highlights: [
      "기능별 독립 모듈로 분리, 신규 리포트 타입 확장 가능한 구조로 개선",
      "데이터 유무 분기 로직 공통 함수화로 중복 코드 제거",
      "Chart.js로 4-Skill 성취도 및 언어 훈련 데이터 시각화",
    ],
    description:
      "레거시 리포트 시스템의 한계를 극복하고 대규모 학습 데이터를 시각화하여 제공하는 프로젝트. 단일 스크립트 구조를 모듈형으로 전환하여 유지보수성과 확장성을 개선했습니다.",
  },
  {
    slug: "nomad-note",
    title: "여행 기록 SNS 앱 고도화 (NomadNote)",
    subtitle: "고용량 미디어 기반 하이브리드 앱 성능 개선",
    period: "2021.07 ~ 2022.07",
    company: "더리얼",
    tags: ["React Native", "PHP", "MySQL"],
    highlights: [
      "무한 스크롤·페이징 도입으로 초기 렌더링 3s → 0.7s 단축",
      "100명 TestFlight 베타 테스트, App Store · Google Play 출시",
      "요구사항 200건 중 140건(70%) 완료",
    ],
    description:
      "고용량 미디어가 포함된 여행 기록 SNS의 하이브리드 앱 성능을 개선하고, 약 200건의 요구사항을 체계적으로 관리한 프로젝트입니다.",
  },
];

export const skills = {
  주력: ["JavaScript", "TypeScript", "React", "Next.js", "React Native"],
  "사용 가능": ["Spring Boot", "Node.js", "PostgreSQL", "Oracle", "MySQL"],
};

export const careers = [
  {
    company: "윤선생",
    role: "프론트엔드 개발자",
    period: "2023.07 ~ 현재",
    current: true,
    descriptions: [
      "레거시 시스템 개선 및 학습 데이터 시각화",
      "Next.js 기반 실시간 모니터링 체계 구축",
      "Atomic Design 도입을 통한 UI 생산성 향상",
      "웹 리소스 최적화 및 렌더링 성능 개선",
    ],
  },
  {
    company: "더리얼",
    role: "풀스택 개발자",
    period: "2021.07 ~ 2023.07",
    current: false,
    descriptions: [
      "React Native 기반 하이브리드 앱 성능 개선",
      "PL 역할로 프로젝트 매니지먼트 및 커뮤니케이션 주도",
      "풀스택 역량을 활용한 비즈니스 서비스 구축",
    ],
  },
];
