import Link from "next/link";
import Heading from "@/components/ui/Heading";

export default function HomePage() {
  return (
    <>
      <Heading>Hello, NextJS!</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="w-80 sm:w-full bg-white border rounded shadow hover:shadow-xl transition-all">
        <Link
          className="flex flex-col sm:flex-row"
          href="/reviews/stardew-valley"
        >
          <img
            className="rounded-t sm:rounded-l sm:rounded-r-none"
            src="/img/stardew-valley.jpg"
            width="320"
            height="180"
            alt="Stardew Valley"
          />
          <h2 className="font-orbitron font-semibold text-center py-1 sm:px-2">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
