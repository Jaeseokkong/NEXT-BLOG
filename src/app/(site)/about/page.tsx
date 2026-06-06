import HeroSection from "./_components/HeroSection";
import CareerSection from "./_components/CareerSection";
import ProjectsSection from "./_components/ProjectSection";
import SkillsSection, { SectionLabel } from "./_components/SkillSection";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-14">
      <HeroSection />
      <SkillsSection />
      <CareerSection />
      <ProjectsSection />

      <section className="space-y-5">
        <SectionLabel>Contact</SectionLabel>
        <div className="bg-zinc-50 dark:bg-zinc-800/60 rounded-xl p-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
              같이 일해요
            </p>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              wotjr294@naver.com
            </p>
          </div>
          <a
            href="mailto:wotjr294@naver.com"
            className="shrink-0 text-sm px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          >
            이메일 보내기
          </a>
        </div>
      </section>
    </div>
  );
}