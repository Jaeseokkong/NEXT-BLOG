'use client';

import { useState, useEffect } from "react";
import SearchInput from "@/app/(site)/posts/_components/SearchInput";
import PostList from "@/app/(site)/posts/_components/PostList";
import { MainCategory } from "@/constants/category";
import {  useSearchParams } from "next/navigation";
import { useInfinitePosts } from "@/hooks/useInfinitePosts";
import CategoryFilter from "./CategoryFilter";
import Title from "@/components/ui/Title";


const PostsContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<MainCategory | undefined>(undefined);
  const { posts, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfinitePosts(category, searchKeyword);
  const isSearching = searchKeyword.length > 0;
  const isEmpty = posts.length === 0;

  useEffect(() => {
    const param = searchParams.get("category");
    setCategory(param ? (param as MainCategory) : undefined)
  }, [searchParams])

  return (
    <div className="flex flex-col gap-3">
      <Title>Posts</Title>
      <CategoryFilter />
      <SearchInput onSearch={setSearchKeyword} />
      {isFetching && isEmpty ? (
        <p className="text-center text-gray-400">검색 중...</p>
      ) : isEmpty ? (
            isSearching ? (
              <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
            ) : (
              <p className="text-center text-gray-500">결과가 없습니다.</p>
            )
      ) : (
        <PostList posts={posts} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} />
      )}
    </div>
  );
};

export default PostsContainer;
