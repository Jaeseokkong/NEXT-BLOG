import AboutAvatar from "@/components/about/AboutAvatar";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-zinc-800 dark:text-zinc-100">
      
      {/* 소개 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <AboutAvatar />
        <div className="md:col-span-2 space-y-6 leading-relaxed">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            About <span className="text-yellow-500 dark:text-yellow-400">Me</span>
          </h1>
          <p>
            안녕하세요! 👋 고객 경험과 가치를 중심에 두고 <strong className="text-yellow-500">사용자 친화적인 프론트엔드</strong>를 만드는 개발자 <strong className="text-yellow-500">한재석</strong>입니다.
          </p>
          <p>
            <strong>React & Next.js</strong> 기반의 대시보드, 데이터 시각화, 인터랙션 개발 경험이 있으며
            단순한 기능 구현을 넘어 <strong>성능 최적화와 비즈니스 인사이트</strong>를 담은 개발을 지향합니다.
          </p>
          <p>
            협업과 소통을 중시하며, 문제 해결을 빠르게 실행하는 <strong>성장 중심의 마인드셋</strong>을 가지고 있습니다.
            최신 기술과 베스트 프랙티스를 탐구하며 팀과 함께 성장하는 것을 즐깁니다.
          </p>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2">
          🚀 Skill Set
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {/* Core */}
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">JavaScript (ES6+)</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">TypeScript</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">React</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Next.js</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Redux</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">React Query</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Tailwind CSS</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Styled Components</span>

          {/* Collaboration */}
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Figma 협업</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Git & GitHub</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Notion</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Confluence</span>

          {/* API / Backend */}
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">REST API</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">GraphQL</span>

          {/* Testing / Infra */}
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">React Testing Library</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">Vercel</span>
          <span className="px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800">GitHub Actions (CI/CD)</span>
        </div>
      </section>

      {/* 커리어 */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-2">
          💼 Career
        </h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">
            윤선생 기술본부 — 프론트엔드/웹 개발 (2023.07 ~ 현재)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>D-Book 서비스:</strong> React & Spring 기반 디지털 교재 개발, 
              맞춤형 학습 자료 및 인터랙티브 기능 구현 → <span className="text-yellow-500 font-medium">사용자 만족도 25% 상승</span>
            </li>
            <li>
              <strong>LMS 개발:</strong> 학습 진척도 추적, 성과 시각화, AI 자동 코멘트 기능 탑재 → <span className="text-yellow-500 font-medium">리뷰 시간 30% 단축</span>
            </li>
            <li>
              <strong>교육용 웹뷰/교사용 서비스:</strong> 멀티미디어 콘텐츠 제공, 학습자 데이터 시각화 → 교사 효율성 15~18% 향상
            </li>
            <li>
              <strong>YOONS.COM 유지보수:</strong> UX 개선 및 시스템 안정성 확보 → 관리자 시간 30% 절감
            </li>
            <li>
              <strong>API 헬스 체크 & 모니터링:</strong> Next.js 기반 대시보드 구현 → 운영팀 및 개발팀 서비스 인지 시간 단축
            </li>
            <li>
              <strong>RD 리포트 디자인:</strong> Crownix 기반 학습 진단 리포트 시각화 → 교사/학습자 이해도 향상
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">
            더리얼마케팅 — 웹/앱 개발 (2021.06 ~ 2023.07)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Metacity Stamp:</strong> 전자영수증 가맹점 스탬프 관리 페이지 및 알림톡 발송 시스템 개발 → 전송 성공률 95% 달성
            </li>
            <li>
              <strong>Fidelis 그룹사 홈페이지:</strong> Spring/JSP 기반 통합 웹사이트 구축, Spring Security 인증 & 권한 관리
            </li>
            <li>
              <strong>HoneymoonResort:</strong> 여행/호텔 웹/모바일 예약 시스템 개발 → 사용자 참여율 30%, 예약 효율 40% 향상
            </li>
            <li>
              <strong>노마드노트 앱:</strong> React Native 기반 다국어 지원, UI/UX 개선, 암복호화 적용 → 앱 성능 20% 이상 개선
            </li>
            <li>
              <strong>실시간 VOC 앱:</strong> WebSocket 기반 데이터 수집/시각화 → 실시간 이슈 대응 가능
            </li>
          </ul>
        </div>
      </section>


      {/* 연락처 */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-700 pb-2">
          📬 Contact
        </h2>
        <p>
          협업, 채용, 기술적 논의 언제든지 환영합니다. <br />
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
