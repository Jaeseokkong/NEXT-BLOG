'use client'

export default function Print({ text }: { text: string; }) {
	return (
		<button
			onClick={() => window.print()}
			className="fixed bottom-6 right-6 px-4 py-2 rounded-lg bg-black text-white shadow print:hidden"
			>
			{text}
		</button>
	)
}
