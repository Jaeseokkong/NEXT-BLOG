import Image from "next/image";
import { Briefcase, Mail, User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-zinc-800 dark:text-zinc-100">
      
      {/* 소개 및 프로필 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="flex justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
            <Image
              src="/images/avatar-1.png"
              alt="HJS Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 leading-relaxed">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <User className="w-8 h-8 text-yellow-500" />
            About <span className="text-yellow-600 dark:text-yellow-400">HJS</span>
          </h1>
          <p>
            안녕하세요! 👋 저는 <strong>HJS</strong>, 사용자 경험과 교육의 디지털 전환에 가치를 두는 프론트엔드 개발자입니다.
          </p>
          <p>
            <strong>React, Next.js</strong> 등 최신 프론트엔드 기술을 바탕으로, 실질적인 사용자 편의를 고민하며 학습 효과를 높이는 서비스를 만들어 왔습니다. UI/UX 개선, 시스템 아키텍처 이해, API 연동, 모니터링 도구까지 전반에 걸쳐 능동적으로 참여하며 팀과 함께 성장해왔습니다.
          </p>
          <p>
            특히, <span className="text-yellow-700 dark:text-yellow-400 font-semibold">교육 콘텐츠 플랫폼</span>과 <span className="text-yellow-700 dark:text-yellow-400 font-semibold">실시간 데이터 서비스</span> 등 사용자 중심 기능을 설계하고 개발하는 데 강점을 가지고 있습니다.
          </p>
        </div>
      </section>

      {/* 경력 소개 */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-2">
          <Briefcase className="w-6 h-6 text-yellow-500" />
          💼 Career
        </h2>

        {/* 윤선생 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-400">
            윤선생 기술본부 — 프론트엔드 개발 (2023.07 ~ 현재)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>D-Book 서비스:</strong> 디지털 교재 개발 주도, 콘텐츠 자동 업데이트 및 인터랙티브 기능 구현으로 몰입형 학습 환경 제공
            </li>
            <li>
              <strong>LMS 개발:</strong> 학습 진척도 추적 및 성과 분석 시스템 구축, AI 자동 코멘트 기능으로 <span className="text-yellow-700 dark:text-yellow-400 font-medium">리뷰 시간 30% 단축</span>
            </li>
            <li>
              <strong>교사용 웹 서비스:</strong> 성적 평가, 리포트 시각화 기능 개발 → 학습자 관리 효율성 향상
            </li>
            <li>
              <strong>웹뷰 앱 콘텐츠:</strong> 실시간 피드백 기능으로 학습자 참여율 20% 증가
            </li>
            <li>
              <strong>API 헬스체크 시스템:</strong> Next.js 기반 대시보드로 API 상태 모니터링 → <span className="text-yellow-700 dark:text-yellow-400 font-medium">서비스 안정성 향상</span>
            </li>
            <li>
              <strong>RD 리포트 디자인:</strong> 학습자/교사 대상 시각적 UX 최적화로 이해도 강화
            </li>
            <li>
              <strong>YOONS.COM 유지보수:</strong> 사용자 중심 UI 개선 및 안정성 확보
            </li>
          </ul>
        </div>

        {/* 더리얼마케팅 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-400">
            더리얼마케팅 — 웹/앱 개발자 (2021.06 ~ 2023.07)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Metacity Stamp:</strong> 전자영수증 스탬프 및 알림톡 발송 관리자 페이지 개발, JWT 기반 보안 강화
            </li>
            <li>
              <strong>Fidelis:</strong> 그룹사 홈페이지 구축, Spring Security를 통한 인증/권한 관리
            </li>
            <li>
              <strong>HoneymoonResort:</strong> 예약 시스템 및 필터링 기능 구현, 참여율 30% 증가
            </li>
            <li>
              <strong>노마드노트 앱:</strong> React Native 기반 고도화 및 다국어, 보안 기능 탑재
            </li>
            <li>
              <strong>실시간 VOC 앱:</strong> 웹소켓 기반 통신, 실시간 데이터 시각화로 사용자 경험 최적화
            </li>
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
          포트폴리오나 협업, 기술 토론에 관심이 있으시다면 언제든지 연락 주세요! <br />
          <a
            href="mailto:wotjr294@naver.com"
            className="text-yellow-700 dark:text-yellow-400 underline font-semibold"
          >
            wotjr294@naver.com
          </a>
        </p>
      </section>
    </div>
  );
}
