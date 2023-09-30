import { getReview, getSlugs } from "@/utils";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ReviewPage({ params }) {
  const review = await getReview(params.slug);

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
