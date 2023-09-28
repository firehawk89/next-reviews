import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link className="text-orange-800 hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-orange-800 hover:underline" href="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link
              className="text-orange-800 hover:underline"
              href="/about"
              prefetch={false}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
