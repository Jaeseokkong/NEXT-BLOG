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
          <div className={`${bgColor} flex items-center justify-center h-full text-center transition-transform duration-300 group-hover:scale-105`}>
            <span className="text-sm font-semibold text-black px-4">{post.title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-4 flex-1">
        <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wide mb-1">
          {post.category}
        </span>

        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1 group-hover:underline">
          {post.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {post.excerpt ?? "내용 없음"}
        </p>

        <span className="mt-auto pt-3 text-xs text-zinc-400">📅 {post.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;
