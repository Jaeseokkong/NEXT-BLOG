import { fetchAllMarkdownFilesWithTree, fetchPostMetas } from "@/lib/github";
import { markdownToPlainText } from "@/lib/stripMarkdown";
import { extractFirstImage } from "@/lib/utils";
import matter from "gray-matter";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 12;

export async function GET(req: NextRequest) {
  const pageParam = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search")?.toLowerCase() || '';
  const category = req.nextUrl.searchParams.get("category");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const allPosts = await fetchAllMarkdownFilesWithTree();

  const filteredFiles = category 
    ? allPosts.filter((file) => file.path.startsWith(`${category}/`))
    : allPosts;

  const sortedFiles = filteredFiles.sort((a, b) => a.path < b.path ? 1 : -1);

  const start = (page - 1) * PAGE_SIZE;
  const selectedFiles = sortedFiles.slice(start, start + PAGE_SIZE + 1);

  const posts = await Promise.all(
    selectedFiles.slice(0, PAGE_SIZE).map(async (file) => {
      const res = await fetch(`${process.env.GITHUB_RAW_BASE_URL}/${file.path}`);
      const content = await res.text();
      const { data, content: body } = matter(content);

      const name = file.path.split("/").pop()!.replace(".md", "");
      const split = name.split("-");

      const title = split.slice(3).join("-");
      const date = split.slice(0, 3).join("");
      const category = file.path.split("/")[0];
      const image = extractFirstImage(body);

      return {
        title,
        date,
        slug: name,
        category,
        path: file.path,
        excerpt: data.excerpt
          ? markdownToPlainText(data.excerpt)
          : markdownToPlainText(body),
        image: image ?? undefined,
      };
    })
  );

  const filteredPosts = posts.filter((post) =>
    search ? post.title.toLowerCase().includes(search) : true
  );

  const more = selectedFiles.length > PAGE_SIZE;

  return NextResponse.json({
    posts: filteredPosts,
    more,
  });
}
