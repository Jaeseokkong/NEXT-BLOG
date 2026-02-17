import AboutAvatar from "@/components/about/AboutAvatar";
import Link from "next/link";

const skills = {
  Core: ["TypeScript", "React", "Next.js", "JavaScript (ES6+)"],
  "Styling / UI": ["Tailwind CSS", "Styled Components", "Responsive Design"],
  "Data & State": ["REST API", "React Query", "Axios"],
  "Testing / Dev": ["React Testing Library", "Git / GitHub", "CI/CD"],
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-28 text-zinc-800 dark:text-zinc-100">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <AboutAvatar />

        <div className="md:col-span-2 space-y-8">

          <div className="relative inline-block">
            <Link
              href="/resume"
              className="absolute -top-6 -right-4 md:-right-10 
              bg-indigo-500 text-white text-xs px-3 py-2 rounded-xl shadow-md
              hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              Resume
              <span className="absolute -bottom-1 left-2 w-3 h-3 bg-indigo-500 rotate-45 rounded-sm"></span>
            </Link>

            <h1 className="text-4xl font-bold mb-3">
              About <span className="text-indigo-500 dark:text-indigo-400">Me</span>
            </h1>
          </div>

          <div className="space-y-5 leading-relaxed max-w-2xl text-zinc-700 dark:text-zinc-300">
            <p>
              안녕하세요 👋 고객 경험과 가치를 중심에 두고
              <strong className="text-indigo-500"> 사용자 친화적인 프론트엔드</strong>를 만드는 개발자 
              <strong className="text-indigo-500"> 한재석</strong>입니다.
            </p>
            <p>
              <strong>React & Next.js</strong> 기반의 대시보드, 데이터 시각화,
              인터랙션 개발 경험이 있으며 단순 구현을 넘어 
              <strong> 성능 최적화와 비즈니스 인사이트</strong> 중심 개발을 지향합니다.
            </p>
            <p>
              협업과 소통을 중시하며 빠르게 실행하고 개선하는 
              <strong> 성장 중심 마인드셋</strong>을 가지고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-3">
          🚀 Skill Set
        </h2>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-indigo-500">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full 
                    bg-zinc-100 dark:bg-zinc-800
                    border border-zinc-200 dark:border-zinc-700
                    text-sm font-medium
                    hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-3">
          💼 Career
        </h2>

        <div className="relative border-l-2 border-indigo-500 pl-8 space-y-12">

          <div className="relative">
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-indigo-500 rounded-full"></div>

            <h3 className="text-xl font-semibold text-indigo-500">
              윤선생 기술본부
            </h3>
            <p className="text-sm text-zinc-500 mb-4">
              프론트엔드/웹 개발 · 2023.07 ~ 현재
            </p>

            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>• D-Book 디지털 교재 개발 → 사용자 만족도 25% 상승</li>
              <li>• LMS 학습 진척도 시각화 → 리뷰 시간 30% 단축</li>
              <li>• 교사용 웹뷰 시스템 → 효율성 15~18% 향상</li>
              <li>• API 헬스체크 대시보드 구축</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-indigo-500 rounded-full"></div>

            <h3 className="text-xl font-semibold text-indigo-500">
              더리얼마케팅
            </h3>
            <p className="text-sm text-zinc-500 mb-4">
              웹/앱 개발 · 2021.06 ~ 2023.07
            </p>

            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>• Metacity Stamp → 알림톡 전송 성공률 95%</li>
              <li>• Spring 기반 그룹사 통합 웹사이트 구축</li>
              <li>• HoneymoonResort 예약 시스템 → 예약 효율 40% 향상</li>
              <li>• React Native 앱 성능 20% 개선</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-3">
          📬 Contact
        </h2>

        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <p className="mb-4">
            협업, 채용, 기술적 논의 언제든지 환영합니다.
          </p>

          <a
            href="mailto:wotjr294@naver.com"
            className="text-indigo-500 font-semibold hover:underline"
          >
            wotjr294@naver.com
          </a>
        </div>
      </section>
    </div>
  );
}
