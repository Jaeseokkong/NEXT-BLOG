import Divider from "@/components/atoms/Divider";
import ResumeHeader from "./components/organisms/ResumeHeader";
import ResumeTemplate from "./components/templates/ResumeTemplate";
import SkillSection from "./components/organisms/SkillSection";

export default function ResumePage() {
	return (
		<ResumeTemplate>
			<ResumeHeader />
			<SkillSection />
		</ResumeTemplate>
	)
}
