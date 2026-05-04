import { getAllPosts } from "@/lib/github";
import { parsePostFile } from "@/lib/utils";

const PAGE_SIZE = 12;

export async function getPostsData({ page = 1, category, search }: {
  page: number, category?: string, search?: string
}) {
  let trees = await getAllPosts();
  let more = false;

  if (category) {
    trees = trees.filter((tree) => tree.path.startsWith(`${category}`));
  }

  if (search) {
    trees = trees.filter((tree) => tree.path.toLocaleLowerCase().includes(search.toLowerCase()));
  }

  const getDate = (name: string) => {
    const [y, m, d] = name.split("-").map(Number);
    return new Date(y, m - 1, d).getTime();
  }

  trees.sort((a, b) => getDate(b.name) - getDate(a.name));

  trees = trees.map((tree) => ({
    ...tree,
    ...parsePostFile(tree.path)
  }));

  const start = (page - 1) * PAGE_SIZE;
  const selectedFiles = trees.slice(start, start + PAGE_SIZE);

  if (trees.length > start + PAGE_SIZE + 1) more = true;

  return {
    posts: selectedFiles,
    hasMore: more,
    nextPage: more ? page + 1 : null
  };
}