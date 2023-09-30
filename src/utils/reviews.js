import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const markdownText = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const { content, data } = matter(markdownText);
  const markdownHtml = marked(content);
  const { title, description, date, image } = data;

  return { slug, description, title, date, image, markdownHtml };
}

export async function getLatestReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReviews() {
  const slugs = await getSlugs();

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

  return reviews;
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  let slugs = files.filter((file) => file.endsWith(".md"));
  slugs = slugs.map((slug) => slug.slice(0, -".md".length));

  return slugs;
}
