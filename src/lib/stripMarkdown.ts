import { marked } from "marked";

/** 마크다운을 일반 텍스트로 변환하는 유틸 함수 */
export function markdownToPlainText(markdown: string, maxLength = 200): string {

	const noHeadings = markdown
		.split("\n")
		.filter(line => !line.trim().match(/^#{1,6}\s+/))  // #, ##, ### 등으로 시작하는 행 제거
		.join("\n")

  const boldHandled = noHeadings.replace(/\*\*(.+?)\*\*/g, (_, p1) => `${p1.toUpperCase()}`);

  const html = marked.parse(boldHandled) as string;
	
  const stripped = html
    .replace(/<\/?[^>]+(>|$)/g, "")   // HTML 태그 제거
    .replace(/\s+/g, " ")             // 공백 정리
    .trim();

  return stripped.length > maxLength ? stripped.slice(0, maxLength) + "..." : stripped;
}