import { SectionTitle } from "@/components/molecules/SectionTitle";
import SkillGroup from "@/components/molecules/SkillGroup";

export default function SkillSection() {
    return (
        <section className="mb-8">
            <SectionTitle>Skills</SectionTitle>

            <div className="mt-4 space-y-8">
                <SkillGroup 
                    title="Core"
                    skills={[ "JavaScript", "TypeScript" ]}
                />
                
                <SkillGroup
                    title="Frontend"
                    skills={[
                        'React',
                        'Next.js',
                        'Tailwind CSS',
                    ]}
                />

                <SkillGroup
                    title="Tools & Collaboration"
                    skills={[
                        'Git & GitHub',
                        'Figma',
                        'Vercel',
                    ]}
                />
            </div>
        </section>
    )
}
