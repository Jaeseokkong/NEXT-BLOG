'use client';

import { useState, useEffect } from "react";
import SearchInput from "@/components/posts/SearchInput";
import PostList from "@/components/posts/PostList";
import { MainCategory } from "@/constants/category";
import {  useSearchParams } from "next/navigation";
import { useInfinitePosts } from "@/hooks/useInfinitePosts";


const PostsContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<MainCategory | undefined>(undefined);
  const { posts, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePosts(category, searchKeyword);
  
  useEffect(() => {
    setCategory(searchParams.get("category") as MainCategory);
  }, [searchParams])

  return (
    <div className="flex flex-col gap-3">
      <SearchInput onSearch={setSearchKeyword}/>
      {posts.length === 0 ? 
        searchKeyword ?
          <p className="text-center text-gray-500">검색 결과가 없습니다.</p> 
          :
          <p className="text-center text-gray-500">결과가 없습니다.</p>
       : 
        <PostList posts={posts} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} />
      }
    </div>
  );
};

export default PostsContainer;
