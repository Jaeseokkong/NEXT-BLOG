'use client';

import { useEffect, useRef } from "react";
import { PostItem } from "@/types/post";
import PostRow from "./PostRow";

const Spinner = () => (
  <div className="flex justify-center py-6">
    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-zinc-400" />
  </div>
);

type PostListProps = {
  posts: PostItem[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

const PostList = ({ posts, fetchNextPage, hasNextPage, isFetchingNextPage }: PostListProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    const current = loaderRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostRow key={post.path} post={post} />
      ))}
      {isFetchingNextPage && <Spinner />}
      <div ref={loaderRef} />
    </div>
  );
};

export default PostList;
