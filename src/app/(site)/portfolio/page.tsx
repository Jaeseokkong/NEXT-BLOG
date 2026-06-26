import Hero from "./_components/Hero";
import SkillsSection from "./_components/SkillsSection";
import CareerSection from "./_components/CareerSection";
import ProjectsSection from "./_components/ProjectsSection";

export default async function PortfolioPage() {  
    return(
        <>
            <Hero/>
            <SkillsSection />
            <CareerSection />
            <ProjectsSection />
        </>
    );
}