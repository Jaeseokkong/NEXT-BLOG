export const parsePostFile = (path: string) => {
  const paths = path.split("/");
  
  const breadcrumb = paths[0] + (paths.length > 2 ? " > " + paths[1] : "");

  const fileName = paths[paths.length - 1];

  const nameWithoutExt = fileName.replace(".md", "");

  const [year, month, day, ...titleParts] = nameWithoutExt.split("-");
  const title = titleParts.join("-");

  const date = `${year}-${month}-${day}`;

  return {
    title,
    date,
    breadcrumb
  }
}
