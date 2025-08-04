export function parseFileName(fileName: string) {
  const withoutExtension = fileName.replace(/\.md$/, '');
  const [year, month, day, ...titleParts] = withoutExtension.split('-');
  const formattedDate = `${year} ${month} ${day}`;
  const title = titleParts.join().trim();

  return {
    date: formattedDate,
    title,
    slug: withoutExtension
  }
}

export function extractFirstImage(markdown: string): string | null {
  const match = markdown.match(/!\[.*?\]\((.*?)\)/);
  if (match && match[1]) {
    // 상대 경로면 raw.githubusercontent URL로 변환
    const src = match[1];
    return src.startsWith("http")
      ? src
      : `https://raw.githubusercontent.com/Jaeseokkong/TIL/main/${src.replace("../", "")}`;
  }
  return null;
}

export function formatDate(dateString: string): string {
  const d = new Date(
    dateString.slice(0, 4) +
      '-' +
      dateString.slice(4, 6) +
      '-' +
      dateString.slice(6)
  );
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
