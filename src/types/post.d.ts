import { MainCategory } from "@/constants/category";

export type PostItem = {
    name: string;
    path: string;
    type: string;
}
  
export type PostMeta = {
    title: string;
    date: string;
    category: MainCategory;
    path: string;
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