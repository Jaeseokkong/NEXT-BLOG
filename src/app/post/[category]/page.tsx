import { fetchFilesInCategory } from '@/lib/github';
import { parseFileName } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  params: {
    category: string;
  };
}

export default async function PostListPage({ params }: Props) {
  const { category } = params;
  const files = await fetchFilesInCategory(category);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 capitalize text-zinc-900 dark:text-zinc-100">
        🗂 {category}
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {files.map((file) => {
          const { date, title, slug } = parseFileName(file.name);
          return (
            <li key={slug}>
              <Link
                href={`/post/${category}/${slug}`}
                className="group block p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors duration-200">
                  {formatDate(date)}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100 group-hover:underline">
                  {title}
                </h2>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">
                  클릭하여 자세히 보기 →
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function formatDate(dateString: string): string {
  const d = new Date(dateString.slice(0, 4) + '-' + dateString.slice(4, 6) + '-' + dateString.slice(6));
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
