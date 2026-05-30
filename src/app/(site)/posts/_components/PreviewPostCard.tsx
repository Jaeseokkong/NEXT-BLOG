import Link from 'next/link'
import { PostItem } from '@/types/post'

export default function PreviewPostCard({ post }: { post: PostItem }) {
    return (
        <li>
            <Link
                data-testid={`post-link-${post.path}`}
                href={`/posts/${post.path}`}
                className="group flex items-center justify-between gap-4 py-3 px-1 border-b border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
            >
                <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs text-indigo-500 dark:text-indigo-400 shrink-0">
                        {post.breadcrumb}
                    </span>
                    <span className="text-sm text-zinc-800 dark:text-zinc-200 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                    </span>
                </div>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0">
                {post.date}
                </span>
            </Link>
        </li>
    )
}
