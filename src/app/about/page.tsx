// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10 text-zinc-800 dark:text-zinc-200">
      {/* 소개 */}
      <section>
        <h1 className="text-4xl font-bold mb-4">About HJS</h1>
        <p className="text-lg leading-relaxed">
          안녕하세요! 👋 저는 <strong>HJS</strong>입니다.
          <br />
          사용자 경험을 고민하고, 꾸준히 성장하는 프론트엔드 개발자입니다. <br />
          교육 분야의 디지털 전환을 위해 웹과 앱 기술을 활용한 다양한 프로젝트를 경험해왔습니다.
        </p>
      </section>

      {/* 커리어 */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">💼 Career</h2>
        <ul className="space-y-3 text-base">
          <li>
            <strong>윤선생 기술본부</strong> – 프론트엔드 개발 대리 (2023.07 ~ 재직 중)
            <ul className="ml-4 list-disc list-inside text-zinc-600 dark:text-zinc-400">
              <li>D-Book 디지털 교재 서비스 기획 및 개발</li>
              <li>LMS 시스템 설계 및 자동 코멘트 AI 적용</li>
              <li>교사용 웹 서비스 및 교육용 웹뷰 앱 개발</li>
            </ul>
          </li>
          <li>
            <strong>더리얼마케팅</strong> – 웹/앱 개발자 (2021.06 ~ 2023.07)
            <ul className="ml-4 list-disc list-inside text-zinc-600 dark:text-zinc-400">
              <li>전자영수증 관리자 페이지 개발 및 JWT 인증 적용</li>
              <li>그룹사 및 여행사 홈페이지 구축</li>
              <li>React Native 기반 모바일 앱 고도화 및 배포</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 프로젝트 요약 */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">🚀 주요 프로젝트</h2>
        <ul className="space-y-4 text-base leading-relaxed">
          <li>
            <strong>D-Book 서비스 개발</strong> <br />
            - 맞춤형 학습 콘텐츠 제공, 인터랙션 설계, 자동 업데이트 기능 구현
          </li>
          <li>
            <strong>LMS 개발</strong> <br />
            - 학습 진도 추적, 자동화 코멘트 시스템, 시각화 대시보드 구축
          </li>
          <li>
            <strong>Metacity Stamp 관리자 페이지</strong> <br />
            - JWT 기반 인증, 알림톡 템플릿 승인 기능
          </li>
          <li>
            <strong>노마드노트 앱 고도화</strong> <br />
            - React Native 기반 UI/UX 개선, 다국어 및 암호화 기능 탑재
          </li>
        </ul>
      </section>

      {/* 관심 기술 */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">🧠 관심 분야</h2>
        <p>
          효율적인 프론트엔드 구조와 디자인 시스템에 관심이 많습니다. <br />
          최근에는 <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>TailwindCSS</strong>를 기반으로 한 프로젝트를 진행하며 UI/UX 품질 향상과 성능 최적화에 집중하고 있습니다.
        </p>
      </section>

      {/* 연락처 */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">📬 Contact</h2>
        <p>
          언제든지 편하게 연락주세요! <br />
          <a
            href="mailto:your-email@example.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            your-email@example.com
          </a>
        </p>
      </section>
    </div>
  );
}
