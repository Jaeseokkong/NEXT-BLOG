'use client'
import { fetchCategories } from '@/lib/github';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>();

  console.log(categories)
  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
  }, [])

  return (
    <aside className="w-60 max-h-[80vh] p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-md overflow-y-auto">
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-6">📚 카테고리</h2>
      <ul className="space-y-3">
        {categories?.map((category) => (
          <li key={category}>
            <Link
              href={`/post/${category}`}
              className="block px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-100 transition"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar