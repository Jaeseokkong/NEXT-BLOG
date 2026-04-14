import { RepoTreeItem } from "@/types/post";

const GITHUB_RAW_BASE_URL = "https://raw.githubusercontent.com/Jaeseokkong/TIL/main";

const headers = {
  "Accept": "application/vnd.github.v3+json",
  "User-Agent": "Next-TIL-App",
  "Authorization": `token ${process.env.GITHUB_TOKEN}`
};

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

export async function fetchMarkdownFileByPath(path: string): Promise<string> {
  const res = await fetch(`${GITHUB_RAW_BASE_URL}/${path}`, {
    next: { revalidate: 60 }
  });

  let content = await res.text();

  content = content.replace(
    /\.\.\/images\/([\w-]+\.\w+)/g,
    `${GITHUB_RAW_BASE_URL}/images/$1`
  );

  return content;
}

export async function fetchPosts(
  page: number = 1,
  category?: string
): Promise<PostResponse> {

  const query = new URLSearchParams({
    page: page.toString(),
  });

  if (category) {
    query.append("category", category);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?${query.toString()}`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) throw new Error("게시글 데이터를 불러오지 못했습니다.");

  return res.json();
}

let cachedTrees: PostItemType[] = [];

export async function getAllPostPaths(): Promise<PostItemType[]> {
  if (cachedTrees.length > 0) return cachedTrees;

  const res = await fetch(
    `${process.env.GITHUB_TREE_BASE_URL}?recursive=1`,
    {
      headers,
      next: { revalidate: 3600 }
    });

  const data = await res.json();

  cachedTrees = data.tree
    .filter((item: RepoTreeItem) =>
      item.type === "blob" &&
      item.path.endsWith(".md") &&
      !item.path.toLowerCase().includes("readme.md")
    )
    .map((item: RepoTreeItem) => ({
      name: item.path.split("/").pop()!,
      path: item.path,
      type: item.type,
    }));
  
  return cachedTrees;
}