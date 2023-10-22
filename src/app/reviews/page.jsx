import Image from "next/image";
import Link from "next/link";
import { getReviews } from "@/utils";
import Heading from "@/components/ui/Heading";
import Container from "@/components/layout/Container";
import PaginationBar from "@/components/pagination/PaginationBar";
import SearchBox from "@/components/SearchBox";

const PAGE_SIZE = 6;

export const metadata = {
  title: "Reviews",
};

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}

export default async function ReviewsPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { pageCount, reviews } = await getReviews(PAGE_SIZE, page);

  return (
    <section>
      <Container>
        <Heading>All Reviews</Heading>
        <div className="flex justify-between items-center gap-3">
          <PaginationBar href="/reviews" pageCount={pageCount} page={page} />
          <SearchBox />
        </div>
        <ul className="mt-5 flex flex-row justify-center flex-wrap gap-5">
          {reviews.map((review, index) => (
            <li
              key={review.slug}
              className="bg-white border rounded shadow hover:shadow-xl transition-all w-80"
            >
              <Link href={`/reviews/${review.slug}`}>
                <Image
                  className="rounded-t"
                  src={review.image}
                  width="320"
                  height="180"
                  alt={review.title}
                  priority={index === 0}
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
