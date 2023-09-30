import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

async function getReview(slug) {
  const markdownText = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const { content, data } = matter(markdownText);
  const markdownHtml = marked(content);
  const { title, date, image } = data;

  return { title, date, image, markdownHtml };
}

export default async function StardewValleyPage() {
  const review = await getReview("stardew-valley");

  return (
    <article>
      <Heading>{review.title}</Heading>
      <time className="inline-block italic mb-2" dateTime={review.date}>
        {review.date}
      </time>
      <Image
        className="rounded mb-2"
        src={review.image}
        width="640"
        height="320"
        alt="Stardew Valley"
      />
      <div
        className="prose prose-slate max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.markdownHtml }}
      />
    </article>
  );
}
