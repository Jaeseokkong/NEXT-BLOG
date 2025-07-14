'use client';

import { useEffect, useState, useRef } from "react";
import { PostMeta } from "@/lib/github";
import PostCard from "./PostCard";

const Spinner = () => (
  <div className="col-span-full flex justify-center py-6">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500" />
  </div>
);

const PostList = ({ initialPosts }: { initialPosts: PostMeta[] }) => {
  const [posts, setPosts] = useState<PostMeta[]>(initialPosts);
  const [page, setPage] = useState(2); // 이미 1page 로드됨
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!page || page <= 2) return;

    const loadPosts = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/posts?page=${page}`);
      const newPosts = await res.json();
      setPosts((prev) => [...prev, ...newPosts]);
      setIsLoading(false);
    }

    loadPosts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const currentRef = loaderRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isLoading]);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      {isLoading && <Spinner />}
      <div ref={loaderRef} />
    </div>
  );
};

export default PostList;
