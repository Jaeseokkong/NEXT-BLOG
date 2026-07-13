import Hero from "./_components/Hero";
import SkillsSection from "./_components/SkillsSection";
import CareerSection from "./_components/CareerSection";
import ProjectsSection from "./_components/ProjectsSection";

export default async function PortfolioPage() {  
    return(
        <main className="flex flex-col max-w-4xl mx-auto px-4 py-8 gap-6">
            <Hero/>
            <SkillsSection />
            <CareerSection />
            <ProjectsSection />
        </main>
    );
}