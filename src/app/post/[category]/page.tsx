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
      <h1 className="text-2xl font-bold md-4">{params.category}</h1>
      <ul className="space-y-3">
        {files.map((file) => {
          const { date, title, slug } = parseFileName(file.name);
          return (
            <li key={slug} className="p-3 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Link href={`/post/${params.category}/${slug}`}>
                <div className="text-sm text-zinc-500">{date}</div>
                <div className='text-lg font-medium text-zinc-800 dark: text-zinc-100'>{title}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}