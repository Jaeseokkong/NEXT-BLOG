import { SectionTitle } from '@/components/molecules/SectionTitle'
import React from 'react'
import PersonalItem from '../molecules/PersonalItem'

export default function PersonalSection() {
	return (
		<div className="mb-10">
			<SectionTitle>Writing & Learning</SectionTitle>		

			<div className="mt-6 space-y-6">
				<div className="mt-6">
					<PersonalItem
					title="개인 기술 블로그 (TIL 기반)"
					description="Next.js와 TypeScript 기반으로 구현한 개인 기술 블로그 및 포트폴리오"
					highlights={[
						"실무 및 학습 과정에서 겪은 이슈와 해결 과정을 TIL 형태로 기록",
						"프론트엔드 아키텍처, 성능 개선, 컴포넌트 설계 경험 정리",
						"App Router 기반 구조 설계 및 아토믹 디자인 패턴 적용",
					]}
					link="https://hjs-blog.vercel.app"
					/>
				</div>
			</div>
		</div>
	)
}
