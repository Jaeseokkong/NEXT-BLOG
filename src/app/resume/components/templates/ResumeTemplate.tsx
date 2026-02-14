import React from 'react'

export default function ResumeTemplate({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="
				bg-gray-100 py-10 px-7.5
				print:bg-white print:py-0 print:px-0">
			<div
				className="
					mx-auto
					bg-white
					max-w-[210mm]
					min-h-[297mm]
					px-[20mm]
					py-[16mm]
					print:px-[10mm]
					print:py-[8mm]
					text-gray-900
					leading-relaxed
				"
			>
				{children}
			</div>
		</div>
	)
}
