import Link from "next/link";
import Heading from "@/components/ui/Heading";

export default function ReviewsPage() {
  return (
    <div>
      <Heading>All Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow hover:shadow-xl transition-all w-80">
          <Link href="/reviews/stardew-valley">
            <img
              className="rounded-t"
              src="/img/stardew-valley.jpg"
              width="320"
              height="180"
              alt="Stardew Valley"
            />
            <h2 className="text-center py-1">Stardew Valley</h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow hover:shadow-xl transition-all w-80">
          <Link href="/reviews/hollow-knight">
            <img
              className="rounded-t"
              src="/img/hollow-knight.jpg"
              width="320"
              height="180"
              alt="Stardew Valley"
            />
            <h2 className="text-center py-1">Hollow Knight</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
