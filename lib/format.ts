export function toTitle(src: string) {
  const file = src.split("/").pop() ?? "";
  const base = file.replace(/\.[a-zA-Z0-9]+$/, "");
  return base
    .replace(/^project-/, "")
    .replace(/-scaled$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}