import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="py-3">
      <Container type="fluid">
        <nav>
          <ul className="font-orbitron flex gap-3">
            <li>
              <Link
                className="text-orange-800 font-bold hover:underline"
                href="/"
              >
                Indie Gamer
              </Link>
            </li>
            <li className="ml-auto">
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
      </Container>
    </header>
  );
}
