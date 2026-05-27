import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import Link from 'next/link'
import React from 'react'

const metrics = [
    { value: "대략 150개", label: "누적 TIL\n꾸준한 학습 기록" },
    { value: "5년차", label: "프론트엔드\n실무 경험" },
]

function HeroSection() {
	return (
		<>
			<section className="space-y-5">
				<Text color="muted" size="sm">
					한재석 · Frontend Developer
				</Text>
				<Title level={1} className="text-3xl md:text-4xl font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
					측정하고, 개선하고,{" "}
					<span className="text-indigo-500 dark:text-indigo-400">기록합니다</span>
				</Title>
        		<Text color="secondary" className="max-w-lg">
					4년차 프론트엔드 개발자입니다. 레거시를 내제화하고 수치로 증명하는
					개발을 지향하며, 블로그에 먼저 적용해보고 실무에 반영하는 방식으로
					성장하고 있습니다.
				</Text>

				<div className="flex flex-wrap gap-2 pt-1">
					<Link
						href="/resume"
						className="text-sm px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
					>
						이력서 보기
					</Link>
					<a
						href="https://github.com/jaeseokkong"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
					>
						GitHub
					</a>
					<a
						href="mailto:wotjr294@naver.com"
						className="text-sm px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
					>
						wotjr294@naver.com
					</a>
				</div>
			</section>
			<div className="grid grid-cols-2 gap-3 mt-10">
				{metrics.map((m) => (
					<div key={m.value} className="bg-zinc-50 dark:bg-zinc-800/60 rounded-xl p-4">
					<p className="text-xl font-medium text-indigo-500 dark:text-indigo-400 mb-1">
						{m.value}
					</p>
					<p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed whitespace-pre-line">
						{m.label}
					</p>
					</div>
				))}
			</div>
		</>
	)
}

export default HeroSection
