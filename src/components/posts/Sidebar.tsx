import { fetchCategories } from '@/lib/github';
import Link from 'next/link';

const Sidebar = async () => {
  const categories = await fetchCategories();

  return (
    <aside className="hidden md:block w-[220px] shrink-0 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm h-fit sticky top-24">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">📚 카테고리</h2>
      <ul className="space-y-3">
        {categories?.map((category) => (
          <li key={category}>
            <Link
              href={`/posts/${category}`}
              className="block px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-yellow-100 dark:hover:bg-yellow-300/10 text-zinc-800 dark:text-zinc-100 font-medium transition-colors duration-200"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
