'use client'

export default function PrintButton() {
	return (
		<button
			onClick={() => window.print()}
			className="fixed bottom-6 right-6 px-4 py-2 rounded-lg bg-black text-white shadow print:hidden"
			>
			PDF 저장
		</button>
	)
}
