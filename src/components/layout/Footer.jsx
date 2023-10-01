import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-3 text-slate-500 text-center text-xs">
      <Container type="fluid">
        Game data and images courtesy of{" "}
        <a
          className="text-orange-800 hover:underline"
          href="https://rawg.io/"
          target="_blank"
        >
          RAWG
        </a>
      </Container>
    </footer>
  );
}
