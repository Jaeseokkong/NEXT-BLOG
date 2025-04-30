const BASE_URL = "https://api.github.com/repos/Jaeseokkong/TIL/contents";

const headers = {
  "Accept": "application/vnd.github.v3+json",
  "User-Agent": "Next-TIL-App"
}

type PostItemType = {
  name: string;
  path: string;
  type: string;
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(BASE_URL,  { headers, next: {revalidate: 3600 } });
  const data = await res.json();
  return data.filter((item: PostItemType) => item.type === "dir" ).map((item: PostItemType) => item.name);
}

export async function fetchFilesInCategory(category: string): Promise<{name : string; path: string}[]> {
  const res = await fetch(`${BASE_URL}/${category}`, { next: { revalidate: 3600 }});
  const data = await res.json();
  console.log(data.filter((item: PostItemType) => item.name.endsWith(".md")).map((item: PostItemType) => ({ name: item.name, path: item.path})))
  return data.filter((item: PostItemType) => item.name.endsWith(".md")).map((item: PostItemType) => ({ name: item.name, path: item.path}))
}

export async function fetchMarkdownFile(category: string, slug: string): Promise<string> {
  const res = await fetch(`https://raw.githubusercontent.com/Jaeseokkong/TIL/main/${category}/${slug}.md`, {
    next: { revalidate: 60 }
  });
  return await res.text();
}