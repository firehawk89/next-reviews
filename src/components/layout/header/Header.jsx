import Container from "../Container";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="py-3">
      <Container type="fluid">
        <nav>
          <ul className="font-orbitron flex gap-3">
            <li className="font-bold">
              <NavLink href="/">Indie Gamer</NavLink>
            </li>
            <li className="ml-auto">
              <NavLink href="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink href="/about" prefetch={false}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
