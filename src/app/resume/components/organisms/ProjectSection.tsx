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
  					description="사내 다수의 API 상태를 실시간으로 모니터링하기 위한 대시보드형 헬스 체크 시스템"
					highlights={[
					  	"Next.js 기반 프론트엔드 구조 설계 및 대시보드 UI 구현",
						"API 응답 시간·상태 코드 데이터를 Chart.js로 시각화하여 운영 가시성 확보",
						"WebSocket을 활용한 실시간 데이터 반영으로 장애 인지 지연 최소화",
						"운영 및 개발팀의 장애 대응 속도를 50% 이상 단축",
					]}
					techStack={['Next.js', 'TypeScript', 'Chart.js', 'WebSocket']}
				/>

				<ProjectItem
					title="가맹 상담 신청 시스템"
					description="윤선생 가맹 상담 신청을 위한 사용자 입력 기반 예약 시스템"
					highlights={[
  						"기존 레거시 시스템을 React 기반으로 신규 구축",
						"입력 단계 및 검증 로직을 재설계하여 사용자 입력 오류 감소",
						"컴포넌트 단위 구조 개선으로 유지보수성과 확장성 강화",
						"현재 운영 중인 실서비스로 비즈니스 프로세스에 직접 활용",
					]}
					techStack={['React', 'TypeScript', 'React Hook Form']}
				/>

				<ProjectItem
					title="D-Book 디지털 교재 플랫폼"
  					description="학습자 맞춤형 디지털 교재 제공을 위한 교육 플랫폼"
					highlights={[
						"학습 인터랙션 및 콘텐츠 관리 구조 설계로 몰입형 학습 환경 구현",
						"50명 대상 파일럿 테스트를 통해 사용자 피드백 수집 및 UI 개선",
						"확장 가능한 컴포넌트 구조 설계 경험",
					]}
					techStack={['React', 'Redux', 'TypeScript']}
				/>
			</div>
			</section>
	)
}
