import { Briefcase, Mail, User } from "lucide-react";
import AboutAvatar from "@/components/AboutAvatar";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-zinc-800 dark:text-zinc-100">
      
      {/* 소개 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <AboutAvatar />
        <div className="md:col-span-2 space-y-6 leading-relaxed">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <User className="w-8 h-8 text-yellow-500" />
            About <span className="text-yellow-500 dark:text-yellow-400">Me</span>
          </h1>
          <p>
            안녕하세요! 👋 사용자 경험에 집착하는 프론트엔드 개발자 <strong className="text-yellow-500">한재석</strong>입니다.
            기획 의도를 정확히 구현하고, 성능과 유지보수를 고려한 구조 설계를 지향합니다.
          </p>
          <p>
            <strong>React & Next.js</strong> 중심으로 탄탄한 UI 구현, 대시보드 구축, 데이터 시각화 경험이 많으며,
            단순한 구현을 넘어 <strong>비즈니스 인사이트</strong>를 담은 개발을 추구합니다.
          </p>
          <p>
            협업을 중시하고, 문제 해결에 빠르게 대응하며 성장 중심의 마인드셋을 유지합니다. 
            늘 더 나은 프론트엔드를 고민합니다.
          </p>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2">
          🚀 Skill Set
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">JavaScript (ES6+)</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">TypeScript</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">React</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Next.js</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Redux</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Tailwind CSS</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Styled Component</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">React Query</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Figma 협업</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Git & GitHub</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">REST API</span>
        </div>
      </section>

      {/* 경력 */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-2">
          <Briefcase className="w-6 h-6 text-yellow-500" />
          💼 Career
        </h2>

        {/* 윤선생 */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">
            윤선생 기술본부 — 프론트엔드 개발 (2023.07 ~ 현재)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>D-Book:</strong> 디지털 교재 인터랙션 및 자동 업데이트 시스템 구축</li>
            <li><strong>LMS:</strong> AI 기반 자동 피드백 시스템 개발로 <span className="text-yellow-500 font-medium">리뷰 시간 30% 단축</span></li>
            <li><strong>교사용 서비스:</strong> 시각화 중심 성적 분석 시스템 구축</li>
            <li><strong>API 대시보드:</strong> Next.js 기반 헬스 체크 모니터링 → 안정성 강화</li>
            <li><strong>YOONS.COM:</strong> 유지보수 및 UX 개선 주도</li>
          </ul>
        </div>

        {/* 더리얼마케팅 */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">
            더리얼마케팅 — 웹/앱 개발자 (2021.06 ~ 2023.07)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>Metacity Stamp:</strong> 전자영수증 관리 플랫폼 개발</li>
            <li><strong>Fidelis 그룹사:</strong> 통합 웹사이트 및 Spring 인증 시스템 구축</li>
            <li><strong>노마드노트:</strong> React Native 앱 다국어/보안 기능 고도화</li>
            <li><strong>실시간 VOC:</strong> 웹소켓 기반 실시간 VOC 수집 대시보드 구현</li>
          </ul>
        </div>
      </section>

      {/* 연락처 */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-2">
          <Mail className="w-6 h-6 text-yellow-500" />
          📬 Contact
        </h2>
        <p>
          협업, 채용, 기술적 논의 언제든지 환영입니다. <br />
          아래 이메일로 편하게 연락 주세요!
        </p>
        <a
          href="mailto:wotjr294@naver.com"
          className="inline-block text-yellow-500 dark:text-yellow-400 underline font-semibold"
        >
          wotjr294@naver.com
        </a>
      </section>
    </div>
  );
}
