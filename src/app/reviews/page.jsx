import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div>
      <Heading>All Reviews</Heading>
      <ul>
        <li className="text-xl">
          <Link href="/reviews/stardew-valley">Stardew Valley</Link>
        </li>
        <li className="text-xl">
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        adipisci voluptatibus ea, omnis eius enim ullam aliquid? Itaque eligendi
        sint dignissimos fuga, doloribus optio ducimus asperiores necessitatibus
        modi commodi magni.
      </p>
    </div>
  );
}
