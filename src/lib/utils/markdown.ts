export function parseFileName(fileName: string) {
  const withoutExtension = fileName.replace(/\.md$/, '');
  const [year, month, day, ...titleParts] = withoutExtension.split('-');
  const formattedDate = `${year}${month}${day}`;
  const title = titleParts.join(" ").trim();

  return {
    date: formattedDate,
    title,
    slug: withoutExtension
  };
}

export function extractFirstImage(markdown: string): string | null {
  const match = markdown.match(/!\[.*?\]\((.*?)\)/);
  if (match && match[1]) {
    const src = match[1];
    return src.startsWith("http")
      ? src
      : `https://raw.githubusercontent.com/Jaeseokkong/TIL/main/${src.replace("../", "")}`;
  }
  return null;
}