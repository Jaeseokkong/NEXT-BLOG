import React, { JSX } from 'react'

const colorStyles = {
	primary: "text-zinc-800 dark:text-zinc-200",
	secondary: "text-zinc-500 dark:text-zinc-400",
	muted: "text-zinc-400 dark:text-zinc-500",
}

const sizeStyles = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg'
}

interface TextProps {
	children: React.ReactNode;
	as?: 'p' | 'span' | 'div' | 'a';
	size?: 'xs' | 'sm' | 'base' | 'lg';
	href?: string;
	className?: string;
	color?: keyof typeof colorStyles;
}

export default function Text({ children, as = 'p', size = 'base', href, className, color = "primary" }: TextProps) {
	const Tag = as as keyof JSX.IntrinsicElements;

	return (
		<Tag
			{...(as === 'a' && href ? { href } : {})}
			className={`
				leading-relaxed
				${sizeStyles[size]}
				${colorStyles[color]}
				${className}
			`}
		>
			{children}
		</Tag>
	)
}
