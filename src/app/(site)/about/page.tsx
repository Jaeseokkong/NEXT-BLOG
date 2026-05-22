import Avatar from "@/app/(site)/about/_components/Avatar";
import Badge from "@/components/ui/Badge";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import Link from "next/link";
import HeroSection from "./_components/HeroSection";

const skills = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "React Native"],
  Backend: ["Spring Boot", "Node.js"],
  Database: ["PostgreSQL", "Oracle", "MySQL"],
  "UI / Architecture": [
    "Tailwind CSS",
    "Atomic Design",
  ],
};

const careers = [
  {
    company: "윤선생",
    role: "프론트엔드 개발자 · 기술본부",
    period: "2023.07 ~ 현재",
    descriptions: [
      "Next.js 기반 실시간 API 모니터링 시스템 구축 → 장애 감지 시간 30분 → 30초 이내 단축",
      "GIF → MP4 / WebP 최적화 및 Lazy Loading 적용 → 페이지 로드 시간 87% 개선",
      "Atomic Design 기반 UI 구조 설계 → 유지보수성과 생산성 향상",
      "LMS 학습 데이터 시각화 및 리포트 시스템 고도화",
      "외부 솔루션 의존 예약 시스템 내제화 및 운영 효율 개선",
    ],
  },
  {
    company: "더리얼",
    role: "웹/앱 개발자 · IT서비스개발",
    period: "2021.07 ~ 2023.07",
    descriptions: [
      "React Native 기반 하이브리드 앱 성능 개선 → 초기 렌더링 속도 약 77% 단축",
      "App Store / Google Play 배포 및 운영 경험",
      "프로젝트 요구사항 약 200건 관리 및 커뮤니케이션 주도",
      "Spring/PHP 기반 비즈니스 웹 서비스 구축",
    ],
  },
]

const projects = [
  {
    title: "전사 API 실시간 모니터링 시스템",
    stack: "Next.js · Node.js · WebSocket · Cron",
    period: "2025.03 ~ 2025.09",
    desc: [
      "22개 분산 서버 상태 실시간 추적 시스템 구축",
      "Slack / Teams Webhook 및 이메일 알림 자동화",
      "SSR + CSR 분리 구조로 실시간성과 초기 로딩 최적화",
      "장애 감지 시간 30분 → 30초 이내 단축",
    ],
  },
  {
    title: "공식 웹사이트 내제화 및 최적화",
    stack: "Spring Boot · PostgreSQL",
    period: "2025.06 ~ 진행 중",
    desc: [
      "GIF → MP4, 이미지 → WebP 변환 및 Lazy Loading 적용",
      "전송량 170MB → 23.9MB(-86%) 개선",
      "페이지 로드 시간 15.93s → 2.13s(-87%) 개선",
      "외주 홈페이지 사내 이관 및 운영 자율성 확보",
    ],
  },
  {
    title: "가맹 상담 예약 시스템 내제화",
    stack: "React · Spring Boot · PostgreSQL",
    period: "2025.10 ~ 진행 중",
    desc: [
      "Atomic Design 기반 컴포넌트 구조 설계",
      "실시간 인증 및 커스텀 일정 관리 구현",
      "공휴일 API 연동 예약 가능 일시 계산 로직 개발",
      "외부 솔루션 의존도 제거 및 운영 효율 개선",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-28 text-zinc-800 dark:text-zinc-100">
      <HeroSection />
    </div>
  );
}
