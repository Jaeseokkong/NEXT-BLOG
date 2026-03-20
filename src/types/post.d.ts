export type PostItemType = {
    name: string;
    path: string;
    type: string;
}
  
export type PostMeta = {
    title: string;
    date: string;
    slug: string;
    category: string;
    path: string;
    excerpt?: string;
    image?: string;
};
  
export type PostResponse = {
    posts: PostMeta[];
    more: boolean;
}