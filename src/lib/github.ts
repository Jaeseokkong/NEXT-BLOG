import { PostItem, PostResponse, RepoTreeItem } from "@/types/post";

const GITHUB_RAW_BASE_URL = "https://raw.githubusercontent.com/Jaeseokkong/TIL/main";

const headers = {
  "Accept": "application/vnd.github+json",
  "User-Agent": "Next-TIL-App",
  "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
};

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

let cachedPosts: PostItem[] = [];
let lastFetched = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1시간

export async function getAllPosts(): Promise<PostItem[]> {
  const now = Date.now();

  if (cachedPosts.length && now - lastFetched < CACHE_TTL) {
    return cachedPosts;
  }

  if (!process.env.GITHUB_TREE_BASE_URL) {
    throw new Error("Missing GITHUB_TREE_BASE_URL");
  }

  const res = await fetch(`${process.env.GITHUB_TREE_BASE_URL}?recursive=1`, {
      headers,
      next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error("GitHub API fetch failed");
  }

  const data = await res.json();

  cachedPosts = data.tree
    .filter((item: RepoTreeItem) =>
      item.type === "blob" &&
      typeof item.path === "string" &&
      item.path.endsWith(".md") &&
      !item.path.toLowerCase().includes("readme.md")
    )
    .map((item: RepoTreeItem) => ({
      name: item.path.split("/").pop()!,
      path: item.path,
      type: item.type,
    }));
  
  lastFetched = now;
  
  return cachedPosts;
}