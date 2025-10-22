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
      moreButton={{ href: "/posts", label: "전체 글 보기" }}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {initialPosts.slice(0, 4).map((post) => (
          <li key={post.slug}>
            <Link
              data-testid={`post-link-${post.slug}`}
              href={`/posts/${post.category}/${post.slug}`}
              className="group block rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all p-5 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-400">📅 {post.date}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <span className="mt-auto pt-3 text-xs text-indigo-500 dark:text-indigo-400 font-medium group-hover:underline">
                  더 읽기 →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PreviewSection>
  );
}
