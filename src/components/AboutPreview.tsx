'use client';

import Link from 'next/link';
import TechBox from './ui/techBox';

export default function AboutPreview() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">🙋‍♂️ About Me</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-3">
        프론트엔드 개발자이며, 사용자 경험과 성능에 집중하여 웹 서비스를 만듭니다. 
        <br />
        React와 Next.js를 주로 사용하며, 사이드 프로젝트와 기술 블로그 작성에도 열정이 있습니다.
      </p>

      <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-300">
        <TechBox techName="TypeScript"/>
        <TechBox techName="React"/>
        <TechBox techName="Next.js"/>
        <TechBox techName="TailwindCSS"/>
      </div>

      <div className="mt-4">
        <Link
          href="/about"
          className="text-blue-500 hover:underline text-sm"
        >
          → 더 알아보기
        </Link>
      </div>
    </section>
  );
}
