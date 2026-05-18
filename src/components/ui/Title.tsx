import React from 'react'

interface TitleProps {
	level?: 1 | 2 | 3 | 4 | 5;
	children: React.ReactNode;
	className?: string;
}

export default function Title({ level = 3, children, className = ""}: TitleProps) {
	const Tag = `h${level}` as const;

	const style = {
		1: "text-3xl font-bold text-zinc-900 dark:text-zinc-100",
  		2: "text-xl font-semibold text-zinc-900 dark:text-zinc-100",
  		3: "text-base font-semibold text-zinc-800 dark:text-zinc-200",
  		4: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
  		5: "text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400",
	}

	return (
		<Tag className={`${style[level]} ${className}`}>
			{children}
		</Tag>
	)
}
