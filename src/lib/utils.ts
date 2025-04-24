export function parseFileName(fileName: string) {
  const withoutExtension = fileName.replace(/\.md$/, '');
  const [year, month, day, ...titleParts] = withoutExtension.split('-');
  const formattedDate = `${year} ${month} ${day}`;
  const title = titleParts.join().trim();
  console.log([year, month, day, titleParts])

  return {
    date: formattedDate,
    title,
    slug: withoutExtension
  }
}