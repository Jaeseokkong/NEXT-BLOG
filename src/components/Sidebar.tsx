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
    <aside className='w-60 p-4 border-r h-screen sticky top-0 bg-white dark:bg-zinc-900'>
      <h2 className="text-xl font-bold mb-4">📚 카테고리</h2>
      <ul className="space-y-2">
        {categories?.map((category) => (
          <li key={category}>
            <Link
              href={`/post/${category}`}
              className="block px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
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