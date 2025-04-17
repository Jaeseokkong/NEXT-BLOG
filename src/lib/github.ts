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