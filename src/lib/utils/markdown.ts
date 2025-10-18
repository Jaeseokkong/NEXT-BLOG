export type Heading = {
  id: string;
  text: string;
  level: number;
};

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w가-힣\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

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


/**
 * 마크다운에서 h1~h3 제목 추출
 */
export function extractHeadings(markdown: string) {
  const headingRegex = /^(#{1,4})\s+(.*)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  const idCounts: Record<string, number> = {}; // 중복 체크용

  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    let id = text.toLowerCase().replace(/[^\w가-힣]+/g, "-"); // 한글 포함 허용

    // 중복 id 방지 처리
    if (idCounts[id]) {
      idCounts[id] += 1;
      id = `${id}-${idCounts[id]}`;
    } else {
      idCounts[id] = 1;
    }

    headings.push({ id, text, level });
  }

  return headings;
}

/**
 * 제목에 id 앵커 태그 삽입
 */
export function injectHeadingAnchors(markdown: string): string {
  return markdown.replace(/^(#{1,3})\s+(.*)$/gm, (_, hashes, title) => {
    const id = slugify(title);
    return `${hashes} ${title}\n<a id="${id}"></a>`;
  });
}

