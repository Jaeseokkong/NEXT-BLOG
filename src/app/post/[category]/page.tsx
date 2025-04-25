import { fetchFilesInCategory } from '@/lib/github';
import { parseFileName } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  params: {
    category: string;
  }
}

export default async function PostListPage({params}: Props) {
  const files = await fetchFilesInCategory(params.category);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold md-6 capitalize">{params.category}</h1>
      <ul className="space-y-4">
        {files.map((file) => {
          const { date, title, slug } = parseFileName(file.name);
          return (
            <li key={slug} className="p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-200 border border-zinc-200 dark:border-zinc-700">
              <Link href={`/post/${params.category}/${slug}`}>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{date}</div>
                <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mt-1">
                  📝 {title}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}