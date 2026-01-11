import React from 'react'

interface BadgeProps {
	children: React.ReactNode;
	className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
	return (
		<span
			className={`
				inline-block
				rounded-md
				bg-gray-100
				px-2
				py-0.5
				text-ts
				font-medium
				text-gray-700
				${className}	
			`}
		>
			{children}
		</span>
	)
}
