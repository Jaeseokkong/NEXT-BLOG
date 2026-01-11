import React from 'react'

interface TitleProps {
	level?: 1 | 2 | 3 | 4 | 5;
	children: React.ReactNode;
	className: string;
}

export default function Title({ level = 3, children, className }: TitleProps) {
	const Tag = `h${level}` as const;

	const style = {
		1: "text-2xl font-bold",
		2: "text-lg font-semibold",
		3: "text-base font-semibold",
		4: "text-sm font-medium",
		5: "text-xs font-medium uppercase traking-wide"
	}

	return (
		<Tag className={`${style[level]} ${className}`}>
			{children}
		</Tag>
	)
}
