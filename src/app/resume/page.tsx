import ResumeHeader from "./components/organisms/ResumeHeader";
import ResumeTemplate from "./components/templates/ResumeTemplate";
import SkillSection from "./components/organisms/SkillSection";
import ExperienceSection from "./components/organisms/ExperienceSection";

export default function ResumePage() {
	return (
		<ResumeTemplate>
			<ResumeHeader />
			<SkillSection />
			<ExperienceSection />
		</ResumeTemplate>
	)
}
