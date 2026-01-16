import Divider from "@/components/atoms/Divider";
import ResumeHeader from "./components/organisms/ResumeHeader";
import ResumeTemplate from "./components/templates/ResumeTemplate";

export default function ResumePage() {
	return (
		<ResumeTemplate>
			<ResumeHeader/>
			<Divider variant="section" />
		</ResumeTemplate>
	)
}
