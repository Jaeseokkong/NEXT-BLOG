import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10 text-zinc-800 dark:text-zinc-200">
      <div className="flex-shrink-0">
        <Image
          src="/images/avatar-1.png" 
          alt="HJS Avatar-1"
          width={100}
          height={100}
          className="w-36 h-36 rounded-full border-zinc-300 dark:border-zinc-600 shadow-lg object-cover"
          loading="lazy"
          unoptimized
        />
      </div>

      {/* 텍스트 섹션 */}
      <div className="flex-1 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 prose prose-zinc dark:prose-invert max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-6">About HJS</h1>
        <p>
          안녕하세요! 👋 저는 <strong>HJS</strong>입니다.<br />
          사용자 경험을 최우선으로 생각하며, 교육 분야의 디지털 전환을 위해 웹과 앱 기술을 통해 꾸준히 성장하고 있는 프론트엔드 개발자입니다.<br />
          4년 이상의 경력을 바탕으로, 복잡한 시스템 설계부터 인터랙티브 UI 개발까지 폭넓은 프로젝트를 수행하며 실질적인 학습 경험 향상에 기여해왔습니다.
        </p>

        <h2 className="mt-10 mb-4 text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-700 pb-1">💼 Career</h2>
        <h3 className="text-xl font-semibold mt-4">윤선생 기술본부 — 프론트엔드 개발(2023.07 ~ 현재)</h3>
        <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-400">
          <li>
            <strong>D-Book 서비스 개발</strong><br />
            React, Spring, Oracle 환경에서 디지털 교재 서비스 기획과 프론트엔드 개발을 주도. 사용자 맞춤형 콘텐츠와 인터랙티브 학습 환경 구현.
          </li>
          <li>
            <strong>LMS 개발</strong><br />
            AI 코멘트 자동 생성으로 학습 리뷰 시간을 30% 단축하고 관리 효율성 40% 향상.
          </li>
          <li>
            <strong>교육용 웹뷰 앱 및 교사용 웹 서비스</strong><br />
            실시간 피드백 및 학습자 관리 대시보드 개발로 참여율과 관리 효율성 증대.
          </li>
          <li>
            <strong>API 헬스 체크 및 모니터링</strong><br />
            Next.js 기반 내부 API 모니터링 대시보드 개발로 장애 대응 및 운영 효율성 향상.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">더리얼마케팅 — 웹/앱 개발자 (2021.06 ~ 2023.07)</h3>
        <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-400">
          <li>
            <strong>전자영수증 관리자 페이지 (Metacity Stamp)</strong><br />
            React와 Spring으로 보안 강화 및 알림톡 템플릿 승인 기능 구현.
          </li>
          <li>
            <strong>그룹사 홈페이지 구축 (Fidelis)</strong><br />
            사용자 친화적 UI/UX와 Spring Security 적용으로 안정적 운영.
          </li>
          <li>
            <strong>여행사 웹/모바일 사이트 (HoneymoonResort)</strong><br />
            예약 시스템 구축 및 검색 기능 최적화로 사용자 참여율 30% 증가.
          </li>
          <li>
            <strong>SNS 여행 앱 (노마드노트) 고도화</strong><br />
            React Native로 다국어 지원 및 보안 기능 강화, 앱 성능 20% 개선.
          </li>
        </ul>

        <h2 className="mt-10 mb-4 text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-700 pb-1">🧠 관심 분야 & 가치관</h2>
        <p>
          유지보수성과 확장성을 고려한 프론트엔드 아키텍처 설계와 디자인 시스템 구축에 관심이 많습니다.<br />
          React, Next.js, TypeScript, TailwindCSS를 기반으로 사용자 중심의 UI/UX와 웹 성능 최적화를 목표로 하고 있습니다.<br />
          협업과 소통을 중요하게 생각하며, 교육 분야 혁신에 기여하는 개발자가 되고자 합니다.
        </p>

        <h2 className="mt-10 mb-4 text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-700 pb-1">📬 Contact</h2>
        <p>
          언제든지 편하게 연락 주세요!<br />
          <a
            href="mailto:wotjr294@naver.com"
            className="text-blue-600 dark:text-blue-400 underline font-medium"
          >
            wotjr294@naver.com
          </a>
        </p>
      </div>
    </div>
  );
}
