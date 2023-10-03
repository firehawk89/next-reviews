import Image from "next/image";
import Link from "next/link";
import { getReviews } from "@/utils";
import Heading from "@/components/ui/Heading";
import Container from "@/components/layout/Container";

export default async function HomePage() {
  const featuredReviews = await getReviews(3);

  return (
    <section>
      <Container>
        <Heading>Hello, NextJS!</Heading>
        <p className="pb-3">Only the best indie games, reviewed for you.</p>
        <ul className="flex flex-col gap-3">
          {featuredReviews.map((review, index) => (
            <li
              key={review.slug}
              className="w-80 sm:w-full bg-white border rounded shadow hover:shadow-xl transition-all"
            >
              <Link
                className="flex flex-col sm:flex-row"
                href={`/reviews/${review.slug}`}
              >
                <Image
                  className="rounded-t sm:rounded-l sm:rounded-r-none"
                  src={review.image}
                  width="320"
                  height="180"
                  alt={review.title}
                  priority={index === 0}
                />
                <div className="flex flex-col text-center sm:text-left p-2">
                  <h2 className="font-orbitron font-semibold mb-1">
                    {review.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
