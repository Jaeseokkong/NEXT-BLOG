import ResumeHeader from "./components/organisms/ResumeHeader";
import ResumeTemplate from "./components/templates/ResumeTemplate";
import SkillSection from "./components/organisms/SkillSection";
import ExperienceSection from "./components/organisms/ExperienceSection";
import ProjectSection from "./components/organisms/ProjectSection";
import PersonalSection from "./components/organisms/PersonalSection";
import ResumeSummary from "./components/organisms/ResumeSummary";
import PrintButton from "@/components/atoms/PrintButton";

export default function ResumePage() {
	return (
		<>
			<ResumeTemplate>
				<ResumeHeader />
				<ResumeSummary />
				<SkillSection />
				<ExperienceSection />
				<ProjectSection />
				<PersonalSection />
			</ResumeTemplate>

			<PrintButton />
		</>
	)
}
