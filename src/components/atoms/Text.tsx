import React, { JSX } from 'react'

interface TextProps {
	children: React.ReactNode;
	as?: 'p' | 'span' | 'div';
	size?: 'sm' | 'base' | 'lg';
	className: string;
}

export default function Text({ children, as = 'p', size = 'base', className }: TextProps) {
	const Tag = as as keyof JSX.IntrinsicElements;

	const sizeStyles = {
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg'
	}

	return (
		<Tag
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
