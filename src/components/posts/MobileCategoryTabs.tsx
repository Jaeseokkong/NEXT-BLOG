'use client'

import Link from 'next/link';
import { useRef, useState } from 'react';
import '@/styles/MobileCategoryTabs.css'

const MobileCategoryTabs = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const categories = [
    'CSS',         'GraphQL',
    'JWT',         'Next.js',
    'Nginx',       'Node',
    'Performance', 'React',
    'Spring',      'TypeScript',
    'Web3'
  ];

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!scrollRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - scrollRef.current.offsetLeft);
		setScrollLeft(scrollRef.current.scrollLeft);
	}

	const handleMouseLeave = () => {
		setIsDragging(false);
	}

	const handleMouseUp = () => {
		setIsDragging(false);
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !scrollRef.current) return;
		e.preventDefault();
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = (x - startX) * 1;
		scrollRef.current.scrollLeft = scrollLeft - walk;
	}

  return (
		<div 
			ref={scrollRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			className="scrollbar-hide md:hidden flex gap-2 overflow-x-auto cursor-grab active:cursor-grabbing select-none
					-mx-4 px-4 py-2"
			style={{ WebkitOverflowScrolling: 'touch' }}
		>
			{categories.map((category) => (
				<Link 
					key={category}
					href={`/posts/${category}`}
					className="
						px-4 py-2 rounded-full border text-sm font-medium transition flex-shrink-0
					bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600 
						hover:bg-zinc-200 dark:hover:bg-zinc-700"
				>
					{category}
				</Link>
			))}
		</div>
  );
};

export default MobileCategoryTabs;
