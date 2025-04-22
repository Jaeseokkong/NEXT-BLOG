const BASE_URL = "https://api.github.com/repos/Jaeseokkong/TIL/contents";

const headers = {
  "Accept": "application/vnd.github.v3+json",
  "User-Agent": "Next-TIL-App"
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(BASE_URL,  { headers, next: {revalidate: 3600 } });
  const data = await res.json();
  return data.filter((item: any) => item.type === "dir" ).map((item: any) => item.name);
}

export async function fetchFilesInCategory(category: string): Promise<{name : string; path: string}[]> {
  const res = await fetch(`${BASE_URL}/${category}`, { next: { revalidate: 3600 }});
  const data = await res.json();
  console.log(data.filter((item: any) => item.name.endsWith(".md")).map((item: any) => ({ name: item.name, path: item.path})))
  return data.filter((item: any) => item.name.endsWith(".md")).map((item: any) => ({ name: item.name, path: item.path}))
}

export async function fetchMarkdownFile(path: string): Promise<string> {
  const res = await fetch(`https://raw.githubusercontent.com/Jaeseokkong/TIL/main/${path}`);
  const data = res.json();
  return await res.text();
}