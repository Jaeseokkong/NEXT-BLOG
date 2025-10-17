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
    const handleScroll = () => {
      const headerOffset = 180;
      let currentId: string | null = null;

      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - headerOffset;
        if (top <= 0) currentId = h.id;
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 180;
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveId(id); // 클릭 즉시 활성화
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="flex flex-col gap-1 text-sm font-light">
      {headings.map((h) => {
        const active = activeId === h.id;
        const paddingLeft = `${(h.level - 1) * 8}px`;
        const sizeClass =
          h.level === 1
            ? "text-base"
            : h.level === 2
            ? "text-sm"
            : h.level === 3
            ? "text-xs"
            : "text-[0.75rem]"; // h4

        const colorClass = active
          ? "font-semibold text-gray-900 dark:text-gray-100"
          : "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200";

        return (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => handleClick(e, h.id)}
            className={`${sizeClass} truncate transition-colors ${colorClass}`}
            style={{ paddingLeft }}
          >
            {h.text}
          </a>
        );
      })}
    </nav>
  );
}
