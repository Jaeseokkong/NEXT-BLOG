import React, { JSX } from 'react'

interface TextProps {
	children: React.ReactNode;
	as?: 'p' | 'span' | 'div' | 'a';
	size?: 'sm' | 'base' | 'lg';
	href?: string;
	className?: string;
}

export default function Text({ children, as = 'p', size = 'base', href, className }: TextProps) {
	const Tag = as as keyof JSX.IntrinsicElements;

	const sizeStyles = {
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg'
	}

	return (
		<Tag
			{...(as === 'a' && href ? { href } : {})}
			className={`
				text-gray-700
				leading-relaxed
				${sizeStyles[size]}
				
				${className}
			`}
		>
			{children}
		</Tag>
	)
}
