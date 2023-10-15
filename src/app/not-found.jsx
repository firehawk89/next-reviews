import Heading from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <section className="w-full my-auto flex flex-col justify-center items-center">
      <Heading>Not Found</Heading>
      <p>Oops, the page you requested only exists in a parallel universe.</p>
    </section>
  );
}
