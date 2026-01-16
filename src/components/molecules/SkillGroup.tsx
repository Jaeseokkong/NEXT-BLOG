import Text from "../atoms/Text";
import SkillList from "./SkillList";

interface SkillGroupProps {
    title: string;
    skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <div>
            <Text size="sm" className="font-medium text-gray-800 md-b">
                {title}
            </Text>
            <SkillList skills={skills} />
        </div>
    )
}
