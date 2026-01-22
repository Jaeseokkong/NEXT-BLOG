import ExperienceItem from '@/components/molecules/ExperienceItem'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import React from 'react'

export default function ExperienceSection() {
    return (
        <section className="mb-10">
            <SectionTitle>Experience</SectionTitle>
            
            <div className="mt-6 space-y-8">
                <ExperienceItem 
                    company="윤선생"
                    role="Frontend Engineer"
                    period="2023.07 ~ 현재"
                    achievements={[
                        "내부 API 헬스 체크 대시보드 개발로 서비스 장애 인지 및 대응 속도 50% 이상 단축",
                        "윤선생 메인 홈페이지 프론트엔드 운영 및 신규 기능 개발을 담당하며 콘텐츠 관리 및 사용자 흐름 개선",
                        "기존 가맹 상담 신청 시스템(WhatTime)을 React 기반으로 신규 구축하여 유지보수성과 사용자 경험을 개선",
                        "교사용 학습자 관리 웹 서비스 고도화를 통해 진척도 대시보드 및 리포트 기능 개발로 교사 업무 효율성 개선",
                    ]}
                />
                <ExperienceItem 
                    company="더리얼마케팅"
                    role="Web Developer"
                    period="2021.06 ~ 2023.07"
                    achievements={[
                      "전자영수증 스탬프 시스템 관리자 페이지 개발로 가맹점 운영 및 관리 업무 효율성 향상",
                      "여행사 웹/모바일 예약 플랫폼 개발 및 예약 프로세스 개선으로 사용자 참여율 30% 이상 증가",
                    ]}
                />
            </div>
        </section>
    )
}
