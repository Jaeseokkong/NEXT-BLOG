import React, { JSX } from 'react'

interface TextProps {
	children: React.ReactNode;
	as?: 'p' | 'span' | 'div' | 'a';
	size?: 'xs' | 'sm' | 'base' | 'lg';
	color: 'primary' | 'secondary' | 'muted';
	href?: string;
	className?: string;
}

export default function Text({ children, as = 'p', size = 'base', color = 'primary', href, className }: TextProps) {
	const Tag = as as keyof JSX.IntrinsicElements;

	const sizeStyles = {
		xs: 'text-xs',
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg'
	}

	const colorStyles = {
		primary: 'text-zinc-800 dark:text-zinc-200',
		secondary: 'text-zinc-600 dark:text-zinc-400',
		muted: 'text-zinc-500 dark:text-zinc-500'
	}

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
