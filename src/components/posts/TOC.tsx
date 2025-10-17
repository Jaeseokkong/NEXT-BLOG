// components/TOC.tsx
"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TOC({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 가장 눈에 띄는(가장 많이 교차한) 항목을 찾기
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id || null);
        } else {
          // 교차하는 항목 없을 때는 스크롤 상단/하단에 따라 처리
          // 그냥 첫번째로 리셋하지 않음
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // 중간 영역을 기준으로 잡음
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    // 관찰 대상 요소들
    const elems = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    elems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // 주소창 해시 변경 (뒤로가기 동작을 위해)
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <aside className="sticky top-24 h-fit rounded-2xl p-4 border border-gray-200/60 bg-white/70 shadow-sm dark:border-gray-800/60 dark:bg-gray-900/60">
      <h3 className="text-sm font-semibold mb-3">목차</h3>

      {headings.length === 0 ? (
        <p className="text-xs text-gray-500">본문에 제목이 없습니다.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li key={h.id} style={{ paddingLeft: (h.level - 1) * 12 }}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                className={`block text-sm truncate ${
                  activeId === h.id
                    ? "font-semibold underline decoration-2 underline-offset-2"
                    : "text-gray-700 dark:text-gray-300 hover:underline"
                }`}
                title={h.text}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
