import Link from "next/link";
import { getLatestReview } from "@/utils";
import Heading from "@/components/ui/Heading";

export default async function HomePage() {
  const featuredReview = await getLatestReview();

  return (
    <section>
      <Heading>Hello, NextJS!</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <article className="w-80 sm:w-full bg-white border rounded shadow hover:shadow-xl transition-all">
        <Link
          className="flex flex-col sm:flex-row"
          href={`/reviews/${featuredReview.slug}`}
        >
          <img
            className="rounded-t sm:rounded-l sm:rounded-r-none"
            src={featuredReview.image}
            width="320"
            height="180"
            alt={featuredReview.title}
          />
          <div className="flex flex-col text-center sm:text-left p-2">
            <h2 className="font-orbitron font-semibold mb-1">
              {featuredReview.title}
            </h2>
            <p className="border-t">{featuredReview.description}</p>
          </div>
        </Link>
      </article>
    </section>
  );
}
