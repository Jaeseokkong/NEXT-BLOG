'use client';

import { useState, useEffect } from "react";
import SearchInput from "@/app/(site)/posts/_components/SearchInput";
import PostList from "@/app/(site)/posts/_components/PostList";
import { MainCategory } from "@/constants/category";
import { useSearchParams } from "next/navigation";
import { useInfinitePosts } from "@/hooks/useInfinitePosts";
import CategoryFilter from "./CategoryFilter";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";

const PostsContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<MainCategory | undefined>(undefined);
  const { posts, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfinitePosts(category, searchKeyword);
  const isSearching = searchKeyword.length > 0;
  const isEmpty = posts.length === 0;

  useEffect(() => {
    const param = searchParams.get("category");
    setCategory(param ? (param as MainCategory) : undefined);
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-4">
      <Title level={1}>Posts</Title>
      <CategoryFilter />
      <SearchInput onSearch={setSearchKeyword} />
      {isFetching && isEmpty ? (
        <Text color="muted" className="text-center">검색 중...</Text>
      ) : isEmpty ? (
        <Text color="muted" className="text-center">
          {isSearching ? "검색 결과가 없습니다." : "결과가 없습니다."}
        </Text>
      ) : (
        <PostList
          posts={posts}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </div>
  );
};

export default PostsContainer;
