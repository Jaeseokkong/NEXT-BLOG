import ExperienceItem from '@/components/molecules/ExperienceItem'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import React from 'react'

export default function ExperienceSection() {
    return (
        <section className="mb-10">
            <SectionTitle>Experience</SectionTitle>
            
            <div className="mt-6 space-y-8">
                <ExperienceItem 
                    company="윤선생 기술본부"
                    role="Frontend Engineer"
                    period="2023.07 ~ 현재"
                    achievements={[
                        "사내 교육·운영 시스템의 프론트엔드 구조를 개선하고 UI/UX를 리팩토링하여 사용성 향상",
                        "Next.js 기반 내부 헬스 체크 대시보드를 설계·구축하여 API 장애 대응 속도 50%+ 개선",
                        "YOONS.COM 메인 홈페이지 기능 개선 및 UI 개편을 통해 콘텐츠 관리 효율 향상",
                        "레거시 가맹 상담 시스템을 React 기반으로 재구축하여 입력 오류 감소 및 확장성 강화",
                        "학습자 관리 서비스에 진척도 대시보드 및 리포트 시각화 기능을 구현하여 교사 업무 효율 15% 개선",
                    ]}

                />
                <ExperienceItem 
                    company="더리얼 IT서비스개발"
                    role="Web Developer"
                    period="2021.06 ~ 2023.07"
                    achievements={[
                        "가맹점 운영자의 관리 효율 향상을 위해 전자영수증 스탬프 관리자 페이지 개발 → 알림톡 발송 기능 구현 및 전송 성공률 95% 달성",
                        "여행사 예약 플랫폼의 사용자 이탈 문제 개선을 위해 검색·예약 프로세스 UI 개선 → 사용자 참여율 30%, 관리 효율성 40% 향상",
                        "SNS 여행 앱의 사용자 경험 개선을 위해 React Native 기반 UI/UX 고도화 및 다국어·보안 기능 적용 → 사용자 만족도 및 앱 안정성 개선",
                        "고객 VOC 대응 지연 문제를 해결하기 위해 WebSocket 기반 실시간 데이터 연동 관리자 UI 개발 → 실시간 모니터링 환경 구축",
                    ]}
                />
            </div>
        </section>
    )
}
