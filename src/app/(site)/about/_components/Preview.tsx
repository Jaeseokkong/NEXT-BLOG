'use client';

import BadgeGroup from '@/components/ui/BadgeGroup';
import PreviewSection from '../../../../components/organisms/PreviewSection';

const techList: string[] = [ "JavaScript", "TypeScript", "React", "Next.js" ];

export default function AboutPreview() {
  return (
    <PreviewSection 
      title="🙋‍♂️ About Me"
      context={`프론트엔드 개발자이며, 사용자 경험과 성능에 집중하여 웹 서비스를 만듭니다.\nReact와 Next.js를 주로 사용하며, 사이드 프로젝트와 기술 블로그 작성에도 열정이 있습니다.`}
      moreButton={{ href:"/about", label: "프로필 더보기"}}
    >
      <BadgeGroup labels={techList} />
    </PreviewSection>
  );
}
