import { SectionTitle } from "@/components/molecules/SectionTitle";
import SkillGroup from "@/components/molecules/SkillGroup";

export default function SkillSection() {
    return (
        <section className="mb-8">
            <SectionTitle>Skills</SectionTitle>

            <div className="mt-4 space-y-6">
                <SkillGroup 
                    title="Frontend"
                    skills={[
                        "React",
                        "Next.js",
                        "TypeScript"
                    ]}
                />

                <SkillGroup
                    title="State & Data"
                    skills={[
                        "Redux Toolkit",
                        "RTK Query",
                        "TanStack Query"
                    ]}
                />

                <SkillGroup
                    title="UI & Styling"
                    skills={[
                        "Tailwind CSS",
                        "Styled-components",
                        "React Hook Form",
                        "Chart.js"
                    ]}
                />
            </div>
        </section>
    )
}
