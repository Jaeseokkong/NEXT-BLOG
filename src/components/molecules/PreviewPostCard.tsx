import { PostMeta } from '@/lib/github'
import Link from 'next/link'
import React from 'react'
import PostPreviewCardTop from '../atoms/PostPreviewCardTop'
import PostPreviewCardTitle from '../atoms/PostPreviewCardTitle'
import PostPreviewCardContext from '../atoms/PostPreviewCardContext'
import PostPreviewCardMoreButton from '../atoms/PostPreviewCardMoreButton'

export default function PreviewPostCard({ post }: { post : PostMeta }) {
    return (
        <li key={post.slug}>
            <Link
                data-testid={`post-link-${post.slug}`}
                href={`/posts/${post.category}/${post.slug}`}
                className="group block rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all p-5 hover:-translate-y-1"
            >
                <div className="flex flex-col h-full">
                    <PostPreviewCardTop category={post.category} date={post.date}/>
                    <PostPreviewCardTitle title={post.title}/>
                    {post.excerpt && <PostPreviewCardContext excerpt={post.excerpt} />}
                    <PostPreviewCardMoreButton />
                </div>
            </Link>
        </li>
    )
}
