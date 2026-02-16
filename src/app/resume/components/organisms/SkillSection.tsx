import { SectionTitle } from "@/components/molecules/SectionTitle";
import SkillGroup from "@/components/molecules/SkillGroup";

export default function SkillSection() {
    return (
        <section className="mb-8">
            <SectionTitle>Skills</SectionTitle>

            <div className="mt-4 space-y-6">
                <SkillGroup 
                    title="Frontend"
                    skills={[ "React", "Next.js" ]}
                />

                <SkillGroup 
                    title="Language"
                    skills={[ "TypeScript", "JavaScript" ]}
                />

                <SkillGroup
                    title="State & Data"
                    skills={[
                        'Redux Toolkit',
                        'RTK Query',
                        'WebSocket',
                        'REST API',
                        "Axios"
                    ]}
                />

                <SkillGroup
                    title="UI & Styling"
                    skills={[
                        'Tailwind CSS',
                        'Styled-components',
                        'CSS',
                        'Chart.js',
                        "React Hook Form"
                    ]}
                />

                <SkillGroup
                    title="Tools"
                    skills={[
                        "Git",
                        "GitHub",
                        "Figma",
                        "Vercel",
                        "ESLint",
                        "Prettier"
                    ]}
                />
            </div>
        </section>
    )
}
