import { MainCategory } from "@/constants/category";

export type PostItemType = {
    name: string;
    path: string;
    type: string;
}
  
export type PostMeta = {
    title: string;
    date: string;
    slug: string;
    category: MainCategory;
    path: string;
    excerpt?: string;
    image?: string;
};
  
export type PostResponse = {
    posts: PostMeta[];
    more: boolean;
}

export type RepoTreeItem = {
    path: string;
    mode: string;
    type: string;
    sha: string;
    url: string;
}