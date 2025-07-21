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
  const res = await fetch(`${GITHUB_API_BASE_URL}/${category}`, {
    headers,
    next: { revalidate: 3600 }
  });
  const data = await res.json();

  if (Array.isArray(data)) {
    return data
      .filter((item: PostItemType) => item.name.endsWith(".md"))
      .map((item: PostItemType) => ({
        name: item.name,
        path: item.path,
        type: item.type,  // type 필드도 추가
      }));
  } else {
    console.error("Expected an array but received:", data);
    return [];
  }
}


export async function fetchMarkdownFile(category: string, slug: string): Promise<string> {
  const res = await fetch(`${GITHUB_RAW_BASE_URL}/${category}/${slug}.md`, {
    next: { revalidate: 60 }
  });
  let content = await res.text();
  content = content.replace(/\.\.\/images\/([\w-]+\.\w+)/g, `${GITHUB_RAW_BASE_URL}/images/$1`);
  // 상대 경로로 된 이미지 결로를 절대 GitHub raw 경로로 변경

  return content;
}

export async function fetchAllPosts(): Promise<PostMeta[]> {
  const categories = await fetchCategories();

  const postsPerCategory = await Promise.all(
    categories.map(async (category) => {
      const files = await fetchFilesInCategory(category);

      const fileFetches = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(`${GITHUB_RAW_BASE_URL}/${category}/${file.name}`);
          const content = await res.text();
          const { data, content: body } = matter(content);

          const name = file.name.replace(".md", "");
          const splitName = name.split("-");
          const title = splitName[3];
          const date = splitName[0] + splitName[1] + splitName[2];

          return {
            title,
            date,
            slug: name,
            category,
            excerpt: data.excerpt ?? body.slice(0, 100),
          };
        })
      );

      return fileFetches;
    })
  )
  
  const allPosts = postsPerCategory.flat();

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function fetchAllPostsPaginated(page: number, limit: number = 10): Promise<PostMeta[]>  {
  const categories = await fetchCategories();
  const posts: PostMeta[] = [];

  for (const category of categories) {
    const files = await fetchFilesInCategory(category);

    for (const file of files) {
      const res = await fetch(`${GITHUB_API_BASE_URL}/main/${category}/${file.name}`);
      const content = await res.text();
      const { data, content: body } = matter(content);

      const name = file.name.replace(".md", "");
      const splitName = name.split("-");
      const title = splitName[3];
      const date = splitName[0] + splitName[1] + splitName[2];

      posts.push({
        title,
        date,
        slug: name,
        category,
        excerpt: data.excerpt ?? body.slice(0, 100) + "...",
      })
    }
  }

  const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  const start = (page -1) * limit;
  return sortedPosts.slice(start, start + limit);
}

export async function fetchPostMetas(page: number, limit: number): Promise<PostMeta[]> {
  const categories = await fetchCategories();
  const metaList: { category: string; file: PostItemType }[] = [];

  for (const category of categories) {
    const files = await fetchFilesInCategory(category);
    files.forEach((file) => {
      metaList.push({ category, file });
    });
  }

  const sorted = metaList.sort((a, b) => b.file.name.localeCompare(a.file.name));
  const selected = sorted.slice((page - 1) * limit, page * limit);

  const posts = await Promise.all(selected.map(async ({ category, file }) => {
    const res = await fetch(`${GITHUB_RAW_BASE_URL}/${category}/${file.name}`);
    const content = await res.text();
    const { data, content: body } = matter(content);

    const name = file.name.replace(".md", "");
    const split = name.split("-");
    const title = split[3];
    const date = split.slice(0, 3).join("");
    const image = extractFirstImage(body);

    return {
      title,
      date,
      slug: name,
      category,
      excerpt: data.excerpt
        ? markdownToPlainText(data.excerpt)
        : markdownToPlainText(body),
      image: image ?? undefined
    };
  }));

  console.log(posts);
  return posts;
}

export async function fetchPosts(page: number = 1): Promise<PostResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("게시글 데이터를 불러오지 못했습니다.");

  const result = await res.json();

  return result;
}