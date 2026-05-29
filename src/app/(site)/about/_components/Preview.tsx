import PreviewSection from "@/components/common/PreviewSection";

const highlights = [
    { label: "4년차", desc: "프론트엔드 실무 경험" },
    { label: "154개", desc: "누적 TIL" },
    { label: "−87%", desc: "페이지 로드 개선 (이벤트 페이지 기준)" },
]

export default function AboutPreview() {
    return (
        <PreviewSection
            title="About"
            moreButton={{ href: "/about", label: "더 보기" }}
        >
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
                측정하고, 개선하고, 기록합니다. 레거시를 내제화하고 수치로 증명하는
                개발을 지향합니다.
            </p>
            <div className="grid grid-cols-3 gap-3">
                {highlights.map((h) => (
                <div
                    key={h.label}
                    className="bg-zinc-50 dark:bg-zinc-800/60 rounded-xl p-4"
                >
                    <p className="text-lg font-medium text-indigo-500 dark:text-indigo-400 mb-1">
                    {h.label}
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    {h.desc}
                    </p>
                </div>
                ))}
            </div>
        </PreviewSection>
    );
}
