import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import React from 'react'

function HeroSection() {
	return (
		<>
			<section className="space-y-5">
				<Text className="text-sm text-zinc-400 dark:text-zinc-500">
					한재석 · Frontend Developer
				</Text>
				<Title level={1} className="text-3xl md:text-4xl font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
					측정하고, 개선하고,{" "}
					<span className="text-indigo-500 dark:text-indigo-400">기록합니다</span>
				</Title>
				<p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
					4년차 프론트엔드 개발자입니다. 레거시를 내제화하고 수치로 증명하는
					개발을 지향하며, 블로그에 먼저 적용해보고 실무에 반영하는 방식으로
					성장하고 있습니다.
				</p>
			</section>
		</>
	)
}

export default HeroSection
