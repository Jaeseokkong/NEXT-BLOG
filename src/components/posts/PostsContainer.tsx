'use client';

import { useState, useEffect } from "react";
import SearchInput from "@/components/posts/SearchInput";
import PostList from "@/components/posts/PostList";
import { usePosts } from "@/hooks/usePosts";
import { PostResponse } from "@/types/post";
import { MainCategory } from "@/constants/category";


const PostsContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [category, setCategory] = useState<MainCategory | undefined>(undefined);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = usePosts(category, searchKeyword);
  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  if (isFetching) {
    return <div>...</div>
  }

  return (
    <div className="flex flex-col gap-3">
      {posts.length === 0 ? 
        <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
       : 
        <PostList posts={posts} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} />
      }
    </div>
  );
};

export default PostsContainer;
