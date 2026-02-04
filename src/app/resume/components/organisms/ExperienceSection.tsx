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
                        "사내 교육 서비스 및 운영 시스템 전반의 프론트엔드 개발과 UI/UX 개선을 담당",
                        "Next.js 기반 내부 API 헬스 체크 대시보드 구축으로 API 상태 및 응답 시간을 실시간 시각화하여 장애 인지 및 대응 속도 50% 이상 단축",
                        "윤선생 메인 홈페이지(YOONS.COM) 운영 및 신규 기능 개발을 통해 콘텐츠 관리 흐름과 사용자 탐색 경험 개선",
                        "가맹 상담 신청 시스템을 React 기반으로 신규 구축하여 입력 플로우를 단순화하고 유지보수성과 확장성 강화",
                        "교사용 학습자 관리 웹 서비스 고도화로 진척도 대시보드 및 리포트 시각화 기능을 구현하여 교사 업무 효율성 약 15% 개선",
                    ]}
                />
                <ExperienceItem 
                    company="더리얼 IT서비스개발"
                    role="Web Developer"
                    period="2021.06 ~ 2023.07"
                    achievements={[
                        "전자영수증 가맹점 스탬프 관리자 페이지(Metacity Stamp)를 개발하여 템플릿 관리 및 알림톡 발송 기능을 구현하고, 전송 성공률 95% 달성",
                        "여행사 웹·모바일 예약 플랫폼 개발에 참여하여 검색·예약 프로세스를 개선하고 사용자 참여율 30%, 예약 관리 효율성 40% 향상",
                        "React Native 기반 SNS 여행 애플리케이션 고도화 작업을 통해 UI/UX 개선, 다국어 지원 및 보안 기능을 적용하여 앱 성능 및 사용자 만족도 개선",
                        "WebSocket 기반 실시간 VOC 연동 애플리케이션 개발로 실시간 데이터 시각화 및 관리자 UI/UX 개선 경험",
                    ]}
                />
            </div>
        </section>
    )
}
