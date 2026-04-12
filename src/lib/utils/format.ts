export const parsePostFile = (path: string) => {
  const paths = path.split("/");
  const fileName = paths[path.length - 1];

  const nameWithoutExt = fileName.replace(".md", "");

  const [year, month, day, ...titleParts] = nameWithoutExt.split("-");
  const title = titleParts.join("-");

  const date = `${year}-${month}-${day}`;

  return {
    title,
    date
  }
}
