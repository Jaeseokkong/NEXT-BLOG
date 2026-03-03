import matter from "gray-matter";
import { markdownToPlainText } from "./stripMarkdown";
import { extractFirstImage } from "./utils";

const GITHUB_API_BASE_URL = "https://api.github.com/repos/Jaeseokkong/TIL/contents";
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


export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(GITHUB_API_BASE_URL,  { headers, next: {revalidate: 3600 } });
  const data = await res.json();
  return data.filter((item: PostItemType) => item.type === "dir" && item.name !== "images").map((item: PostItemType) => item.name);
}

export async function fetchFilesInCategory(category: string): Promise<PostItemType[]> {
  return fetchMarkdownFilesRecursive(category);
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

export async function fetchAllPosts(): Promise<PostMeta[]> {
  const categories = await fetchCategories();

  const posts: PostMeta[] = [];

  for (const category of categories) {
    const files = await fetchFilesInCategory(category);

    for (const file of files) {
      const res = await fetch(`${GITHUB_RAW_BASE_URL}/${file.path}`);
      const content = await res.text();
      const { data, content: body } = matter(content);

      const name = file.name.replace(".md", "");
      const split = name.split("-");
      const title = split[3];
      const date = split.slice(0, 3).join("");

      posts.push({
        title,
        date,
        slug: name,
        category: file.path.split("/")[0],
        path: file.path,
        excerpt: data.excerpt ?? body.slice(0, 100),
      });
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function fetchAllPostsPaginated(
  page: number,
  limit: number = 10
): Promise<PostMeta[]> {

  const allPosts = await fetchAllPosts();

  const start = (page - 1) * limit;
  return allPosts.slice(start, start + limit);
}

export async function fetchPostMetas(
  page: number,
  limit: number
): Promise<PostMeta[]> {

  const categories = await fetchCategories();
  const metaList: PostMeta[] = [];

  for (const category of categories) {
    const files = await fetchFilesInCategory(category);

    for (const file of files) {
      const res = await fetch(`${GITHUB_RAW_BASE_URL}/${file.path}`);
      const content = await res.text();
      const { data, content: body } = matter(content);

      const name = file.name.replace(".md", "");
      const split = name.split("-");
      const title = split[3];
      const date = split.slice(0, 3).join("");
      const image = extractFirstImage(body);

      metaList.push({
        title,
        date,
        slug: name,
        category: file.path.split("/")[0],
        path: file.path,
        excerpt: data.excerpt
          ? markdownToPlainText(data.excerpt)
          : markdownToPlainText(body),
        image: image ?? undefined,
      });
    }
  }

  const sorted = metaList.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  const start = (page - 1) * limit;
  return sorted.slice(start, start + limit);
}

export async function fetchPosts(page: number = 1): Promise<PostResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?page=${page}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("게시글 데이터를 불러오지 못했습니다.");

  const result = await res.json();

  return result;
}

async function fetchMarkdownFilesRecursive(path: string): Promise<PostItemType[]> {
  const res = await fetch(`${GITHUB_API_BASE_URL}/${path}`, {
    headers,
    next: { revalidate: 3600 }
  });

  const data = await res.json();

  if (!Array.isArray(data)) return [];

  let results: PostItemType[] = [];

  for (const item of data) {
    if (item.type === "file" && item.name.endsWith(".md")) {
      results.push({
        name: item.name,
        path: item.path,
        type: item.type,
      });
    }

    if (item.type === "dir") {
      const nested = await fetchMarkdownFilesRecursive(item.path);
      results = results.concat(nested);
    }
  }

  return results;
}