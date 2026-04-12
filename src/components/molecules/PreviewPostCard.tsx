import Link from 'next/link'
import React from 'react'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import MoreButton from '../atoms/MoreButton'
import { PostItem } from '@/types/post'

export default function PreviewPostCard({ post }: { post : PostItem }) {
    return (
        <li key={post.path}>
            <Link
                data-testid={`post-link-${post.path}`}
                href={`/posts/${post.path}`}
                className="group block rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all p-5 hover:-translate-y-1"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-2">
                        <Text as="span" size="xs" className="text-indigo-500 dark:text-indigo-400 uppercase tracking-wide">{post.breadcrumb}</Text>
                        <Text as="span" size="xs" className="text-zinc-400">📅 {post.date}</Text>
                    </div>
                    <Title level={2}>{post.title}</Title>
                    <MoreButton>더 보기</MoreButton>
                </div>
            </Link>
        </li>
    )
}
