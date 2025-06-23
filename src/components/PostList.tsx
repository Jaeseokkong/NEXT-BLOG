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
    if (!page) return;

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
    if (!page) return;

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

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [isLoading]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, idx) => (
        <PostCard key={`${post.slug}-${idx}`} post={post} />
      ))}
      {isLoading && <Spinner />}
      <div ref={loaderRef} />
    </div>
  );
};

export default PostList;
