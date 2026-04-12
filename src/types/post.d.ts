import { MainCategory } from "@/constants/category";

export type PostItem = {
    name: string;
    path: string;
    type: string;
    title:string;
    date: string;
    breadcrumb: string;
}
  
export type PostMeta = {
    title: string;
    date: string;
    category: MainCategory;
    path: string;
    image?: string;
};
  
export type PostResponse = {
    posts: PostItem[];
    more: boolean;
}

export type RepoTreeItem = {
    path: string;
    mode: string;
    type: string;
    sha: string;
    url: string;
}