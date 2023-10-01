import Link from "next/link";
import { getReviews } from "@/utils";
import Heading from "@/components/ui/Heading";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <section>
      <Container>
        <Heading>All Reviews</Heading>
        <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review) => (
            <li
              key={review.slug}
              className="bg-white border rounded shadow hover:shadow-xl transition-all w-80"
            >
              <Link href={`/reviews/${review.slug}`}>
                <img
                  className="rounded-t"
                  src={review.image}
                  width="320"
                  height="180"
                  alt={review.title}
                />
                <h2 className="font-orbitron font-semibold text-center py-1">
                  {review.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
