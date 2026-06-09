import { projects } from "@/app/(site)/about/_data/projects"
import ProjectCard from "./ProjectCard"
import { SectionLabel } from "./SkillSection"

export default function ProjectsSection() {
return (
    <section className="space-y-5">
        <SectionLabel>Projects</SectionLabel>
        <div className="space-y-3">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
    </section>
    )
}
