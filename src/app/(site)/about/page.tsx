import Avatar from "@/app/(site)/about/_components/Avatar";
import Badge from "@/components/ui/Badge";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import Link from "next/link";

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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <Avatar />

        <div className="md:col-span-2 space-y-8">

          <div className="relative inline-block">
            <Link
              href="/resume"
              className="absolute -top-7 -right-12
              bg-indigo-500 text-white text-xs px-3 py-2 rounded-xl shadow-md
              hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              Resume
              <span className="absolute -bottom-1 left-2 w-3 h-3 bg-indigo-500 rotate-45 rounded-sm"></span>
            </Link>

            <Title className="mb-3" level={1}>
              About <span className="text-indigo-500 dark:text-indigo-400">Me</span>
            </Title>
          </div>

          <div className="space-y-5 leading-relaxed max-w-2xl text-zinc-700 dark:text-zinc-300">
            <Text>
              안녕하세요 👋 고객 경험과 가치를 중심에 두고
              <strong className="text-indigo-500"> 사용자 친화적인 프론트엔드</strong>를 만드는 개발자 
              <strong className="text-indigo-500"> 한재석</strong>입니다.
            </Text>
            <Text>
              <strong>React & Next.js</strong> 기반의 대시보드, 데이터 시각화,
              인터랙션 개발 경험이 있으며 단순 구현을 넘어 
              <strong> 성능 최적화와 비즈니스 인사이트</strong> 중심 개발을 지향합니다.
            </Text>
            <Text>
              협업과 소통을 중시하며 빠르게 실행하고 개선하는 
              <strong> 성장 중심 마인드셋</strong>을 가지고 있습니다.
            </Text>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <Title level={1} className="border-b border-zinc-200 dark:border-zinc-700 pb-3">
          🚀 Skill Set
        </Title>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <Title level={2}>
                {category}
              </Title>

              <div className="flex flex-wrap gap-4">
                {items.map((skill) => (
                  <Badge key={skill} label={skill}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <Title level={1} className="border-b dark:border-zinc-200 border-zinc-700 pb-3">
          💼 Career
        </Title>

        <div className="relative border-l-2 dark:border-zinc-200 pl-8 space-y-14">
          {careers.map((career) => (
            <div key={career.company} className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-white bg-zinc-900 dark:bg-zinc-200 border-4 dark:border-zinc-900"></div>

              <Title level={2}>
                {career.company}
              </Title>

              <Text size="sm" className="text-zinc-500 mt-1 mb-5">
                {career.role} · {career.period}
              </Text>

              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                {career.descriptions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 w-2 h-2 bg-white rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-3">
          📬 Contact
        </h2>

        <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700">
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            협업, 채용, 기술적 논의 언제든지 환영합니다.
          </p>

          <a
            href="mailto:wotjr294@naver.com"
            className="text-indigo-500 text-lg font-semibold hover:underline"
          >
            wotjr294@naver.com
          </a>
        </div>
      </section>
    </div>
  );
}
