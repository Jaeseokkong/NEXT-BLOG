import { PostMeta } from '@/lib/github'
import Link from 'next/link'
import React from 'react'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import MoreButton from '../atoms/MoreButton'

export default function PreviewPostCard({ post }: { post : PostMeta }) {
    return (
        <li key={post.slug}>
            <Link
                data-testid={`post-link-${post.slug}`}
                href={`/posts/${post.category}/${post.slug}`}
                className="group block rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all p-5 hover:-translate-y-1"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-2">
                        <Text as="span" size="xs" className="text-indigo-500 dark:text-indigo-400 uppercase tracking-wide">{post.category}</Text>
                        <Text as="span" size="xs" className="text-zinc-400">📅 {post.date}</Text>
                    </div>
                    <Title level={2}>{post.title}</Title>
                    {post.excerpt && <Text size="sm" className="text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{post.excerpt}</Text>}
                    <MoreButton>더 보기</MoreButton>
                </div>
            </Link>
        </li>
    )
}
