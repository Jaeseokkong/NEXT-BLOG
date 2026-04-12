export const parsePostFile = (name: string) => {
  const nameWithoutExt = name.replace(".md", "");

  const [year, month, day, ...titleParts] = nameWithoutExt.split("-");
  const title = titleParts.join("-");

  const date = `${year}-${month}-${day}`;

  return {
    title,
    date
  }
}
