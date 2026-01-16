import Text from "../atoms/Text";
import Title from "../atoms/Title";
import SkillList from "./SkillList";

interface SkillGroupProps {
    title: string;
    skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <div className="space-y-2">
            <Title level={3} className="uppercase tracking-wide">
                {title}
            </Title>
            <SkillList skills={skills} />
        </div>
    )
}
