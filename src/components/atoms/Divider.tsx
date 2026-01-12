interface DividerProps {
	variant: "inline" | "section" | "layout";
	orientation?: "horizontal" | "vertical";
	className?: string;
}

export default function Divider({ variant, orientation, className }: DividerProps) {
	if (variant === "inline") {
		return (
			<span
				aria-hidden
        		className={`inline-block mx-2 h-3.5 w-0.5 my-auto bg-gray-400 ${className}`}
			/>
		)
	}

	if (variant === "layout") {
		if (orientation === "vertical") {
			return (
				<div
					role="separator"
					aria-orientation="vertical"
					className={`self-stretch w-px bg-gray-200 ${className}`}
				/>
			)
		}
	}

	return (
		<hr
			role="separator"
			className={`my-6 border-gray-200 ${className}`}
		/>
	);
	
}
