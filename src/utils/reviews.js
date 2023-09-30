import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const markdownText = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const { content, data } = matter(markdownText);
  const markdownHtml = marked(content);
  const { title, date, image } = data;

  return { title, date, image, markdownHtml };
}
