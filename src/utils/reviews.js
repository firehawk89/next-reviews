import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const markdownText = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const { content, data } = matter(markdownText);
  const markdownHtml = marked(content);
  const { title, date, image } = data;

  return { slug, title, date, image, markdownHtml };
}

export async function getReviews() {
  const files = await readdir("./content/reviews");
  let slugs = files.filter((file) => file.endsWith(".md"));
  slugs = slugs.map((slug) => slug.slice(0, -".md".length));

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  return reviews;
}
