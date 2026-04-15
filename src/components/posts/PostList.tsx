'use client';

import { useEffect, useState, useRef } from "react";
import PostCard from "../organisms/PostCard";
import { useSearchParams } from "next/navigation";
import { usePosts } from "@/hooks/usePosts";
import { MainCategory } from "@/constants/category";
import { PostItem } from "@/types/post";

const Spinner = () => (
  <div className="col-span-full flex justify-center py-6">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500" />
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

    return (() => {
      if (current) observer.unobserve(current);
    })
  }, [hasNextPage])
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
      {isFetchingNextPage && <Spinner />}
      <div ref={loaderRef} />
    </div>
  );
};

export default PostList;
