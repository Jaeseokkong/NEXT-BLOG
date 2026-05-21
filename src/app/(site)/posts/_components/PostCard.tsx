import Link from "next/link";
import { PostItem } from "@/types/post";
import Thumbnail from "@/components/ui/Thumbnail";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import MoreButton from "@/components/ui/MoreButton";
import { MainCategory } from "@/constants/category";


const PostCard = ({ post }: { post: PostItem }) => {
  const category = post.breadcrumb.includes(">") ? post.breadcrumb.split(">")[0] : post.breadcrumb;

  return (
    <Link
      href={`/posts/${post.path}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 
      bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Thumbnail title={post.name} category={category as MainCategory} />
      <div className="flex flex-col p-4 flex-1">
          <Text as="span" size="xs" className="text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wide mb-1">{post.breadcrumb} </Text>
          <Title>{post.title}</Title>
          <div className="mt-auto pt-4 flex justify-between items-center text-xs text-zinc-400">
              <span>📅 {post.date}</span>
              <MoreButton>더 보기</MoreButton>
          </div>
      </div>
    </Link>
  );
};

export default PostCard;
