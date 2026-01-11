import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";

export default function ResumeHeader() {
	return (
		<header className="mb-8 space-y-2">
			<Title level={1}>한재석</Title>
			<Text size="base">Frontend Enginner</Text>
			<Text className="mt-3 max-w-2xl">
				React, Next.js, TypeScript 기반으로 사용자 경험과 비지니스 가치르 함께 개선해온 프론트엔드 개발자
			</Text>
		</header>
	)
}
