import Link from "next/link";
import { PostItem } from "@/types/post";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";

const PostRow = ({ post }: { post: PostItem }) => {
  return (
    <Link
      href={`/posts/${post.path}`}
      className="group flex items-center justify-between gap-4 py-3 px-1 border-b border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <Text
          as="span"
          size="xs"
          color="muted"
          className="text-indigo-500 dark:text-indigo-400 shrink-0 uppercase tracking-wide"
        >
          {post.breadcrumb}
        </Text>
        <Title
          level={3}
          className="truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        >
          {post.title}
        </Title>
      </div>
      <Text as="span" size="xs" color="muted" className="shrink-0">
        {post.date}
      </Text>
    </Link>
  );
};

export default PostRow;
