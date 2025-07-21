import Link from "next/link";
import { PostMeta } from "@/lib/github";
import PreviewSection from "../ui/PreviewSection";

interface LatestPostsPreviewProps {
  initialPosts: PostMeta[];
}

export default function LatestPostsPreview({ initialPosts }: LatestPostsPreviewProps) {
  return (
    <PreviewSection
      title="📌 최신 포스트"
      content="최근 작성한 포스트들을 소개합니다. 기술 이야기, 개발 일지 등을 기록하고 있어요."
      moreButton={{ href: "/posts", label: "→ 전체 글 보기" }}
    >
      <ul className="space-y-4 mt-4">
        {initialPosts.slice(0, 4).map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.category}/${post.slug}`}
              className="block rounded-lg p-4 bg-white dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition"
            >
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-300 mt-1">{post.date}</p>
              {post.excerpt && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </PreviewSection>
  )
}