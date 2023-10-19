import Image from "next/image";
import { notFound } from "next/navigation";
import { getReview, getSlugs } from "@/utils";
import Heading from "@/components/ui/Heading";
import ShareLink from "@/components/ShareLink";
import Container from "@/components/layout/Container";

export async function generateMetadata({ params }) {
  const review = await getReview(params.slug);

  if (!review) {
    notFound();
  }

  return {
    title: review.title,
    description: review.subtitle,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ReviewPage({ params }) {
  const review = await getReview(params.slug);

  if (!review) {
    notFound();
  }

  return (
    <article>
      <Container>
        <Heading>{review.title}</Heading>
        <p className="font-semibold mb-3">{review.subtitle}</p>
        <div className="flex gap-3 items-baseline">
          <time className="inline-block italic mb-2" dateTime={review.date}>
            {review.date}
          </time>
          <ShareLink />
        </div>
        <Image
          className="rounded mb-2"
          src={review.image}
          width="640"
          height="360"
          alt="Stardew Valley"
          priority
        />
        <div
          className="prose prose-slate max-w-screen-sm"
          dangerouslySetInnerHTML={{ __html: review.body }}
        />
      </Container>
    </article>
  );
}
