import { categoryBgColors } from "@/lib/categoryColors";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

interface Post {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt?: string;
  image?: string;
}

const PostCard = ({ post }: Props) => {
  const hasImage = !!post.image;
  const bgColor = categoryBgColors[post.category] ?? "bg-gray-100";

  return (
    <Link
      href={`/posts/${post.category}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all bg-white dark:bg-zinc-900"
    >
      <div className="relative h-40 w-full">
        {hasImage ? (
          <>
            <Image
              src={post.image!}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute transition" />
          </>
        ) : (
          <div
            className={`${bgColor} flex items-center justify-center h-full text-center transition-transform duration-300 group-hover:scale-105`}
          >
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100 opacity-80">
              {post.category}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-4 flex-1">
        <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wide mb-1">
          {post.category}
        </span>

        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-indigo-500 transition-colors">
          {post.title}
        </h3>

        <div className="mt-auto pt-4 flex justify-between items-center text-xs text-zinc-400">
          <span>📅 {post.date}</span>

          <span className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400 font-medium 
            opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
            더 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
