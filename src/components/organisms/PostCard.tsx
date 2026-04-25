import Link from "next/link";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import MoreButton from "../atoms/MoreButton";
import { PostItem } from "@/types/post";
import { MainCategory } from "@/constants/category";


const PostCard = ({ post }: { post: PostItem }) => {
  let category = post.breadcrumb.includes(">") ? post.breadcrumb.split(">")[0] : post.breadcrumb;

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
