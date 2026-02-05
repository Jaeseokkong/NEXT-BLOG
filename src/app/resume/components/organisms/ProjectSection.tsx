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
					techStack={['React', 'TypeScript', 'React Hook Form', 'Atomic Design']}
				/>

				<ProjectItem
					title="학습 진단 리포트 프론트엔드 고도화"
					description="학습 진단 결과를 기반으로 다양한 출력 환경을 지원하는 교육 리포트"
					highlights={[
						"Vanilla JavaScript 기반으로 학습 리포트 전체 렌더링 구조 설계 및 구현",
						"대규모 진단 데이터(JSON)를 가공하여 그래프·지표·테이블 형태로 동적 시각화",
						"옵션 설정에 따른 섹션 노출, 성취도 표현 방식 등을 유연하게 제어하는 로직 구현",
						"iframe, 새 창, 인쇄 모드 등 다양한 사용 시나리오를 고려한 UI/UX 개선",
						"기존 리포트 대비 정보 전달력 및 사용자 이해도 향상",
					]}
					techStack={['JavaScript']}
				/>
			</div>
			</section>
	)
}
