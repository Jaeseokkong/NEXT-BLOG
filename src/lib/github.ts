import matter from "gray-matter";

const BASE_URL = "https://api.github.com/repos/Jaeseokkong/TIL/contents";

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
};


export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(BASE_URL,  { headers, next: {revalidate: 3600 } });
  const data = await res.json();
  console.log(data.filter((item: PostItemType) => item.type === "dir" ).map((item: PostItemType) => item.name));
  return data.filter((item: PostItemType) => item.type === "dir" ).map((item: PostItemType) => item.name);
}

export async function fetchFilesInCategory(category: string): Promise<{name : string; path: string}[]> {
  const res = await fetch(`${BASE_URL}/${category}`, {
    headers,
    next: { revalidate: 3600 }
  });
  const data = await res.json();

  // data가 배열인지 확인
  if (Array.isArray(data)) {
    return data.filter((item: PostItemType) => item.name.endsWith(".md"))
      .map((item: PostItemType) => ({ name: item.name, path: item.path }));
  } else {
    console.error("Expected an array but received:", data);
    return [];  // 빈 배열을 반환하여 오류를 방지
  }
}

export async function fetchMarkdownFile(category: string, slug: string): Promise<string> {
  const res = await fetch(`https://raw.githubusercontent.com/Jaeseokkong/TIL/main/${category}/${slug}.md`, {
    next: { revalidate: 60 }
  });
  return await res.text();
}

export async function fetchAllPosts(): Promise<PostMeta[]> {
  const categories = await fetchCategories();

  const postsPerCategory = await Promise.all(
    categories.map(async (category) => {
      const files = await fetchFilesInCategory(category);

      const fileFetches = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(`https://raw.githubusercontent.com/Jaeseokkong/TIL/main/${category}/${file.name}`);
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
            excerpt: data.excerpt ?? body.slice(0, 100) + "...",
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
      const res = await fetch(`${BASE_URL}/main/${category}/${file.name}`);
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