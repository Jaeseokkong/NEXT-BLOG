import { SectionTitle } from '@/components/molecules/SectionTitle'
import React from 'react'
import ProjectItem from '../molecules/ProjectItem'

export default function ProjectSection() {
	return (
		<section className="mb-10">
			<SectionTitle>Projects</SectionTitle>

			<div className="mt-6 space-y-8">
				<ProjectItem
				title="내부 API 헬스 체크 및 모니터링 시스템"
					description="회사 내부 API 상태를 실시간으로 모니터링하기 위한 대시보드형 헬스 체크 시스템"
					highlights={[
						"Next.js 기반으로 API 응답 시간 및 상태 코드를 실시간 시각화",
						"WebSocket을 활용한 실시간 데이터 반영",
						"장애 인지 및 대응 속도 개선을 통해 운영 효율성 향상",
					]}
					techStack={['Next.js', 'TypeScript', 'Chart.js', 'WebSocket']}
				/>

				<ProjectItem
					title="가맹 상담 신청 시스템 (WhatTime)"
					description="윤선생 가맹 상담 신청을 위한 사용자 입력 기반 예약 시스템"
					highlights={[
						"기존 시스템을 React 기반으로 재구축하여 유지보수성과 확장성 개선",
						"사용자 입력 흐름을 단순화하여 상담 신청 UX 개선",
						"운영 중인 서비스로 실제 비즈니스 프로세스에 활용",
					]}
					techStack={['React', 'TypeScript', 'React Hook Form']}
				/>

				<ProjectItem
					title="D-Book 디지털 교재 플랫폼"
					description="학습자 맞춤형 디지털 교재 제공을 위한 사내 교육 플랫폼"
					highlights={[
						"학습 인터랙션 및 콘텐츠 관리 구조 설계",
						"파일럿 테스트를 통해 기능 검증 및 UI 개선",
						"확장 가능한 프론트엔드 구조 경험",
					]}
					techStack={['React', 'Redux', 'TypeScript']}
				/>
			</div>
			</section>
	)
}
