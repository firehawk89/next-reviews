import Image from "next/image";
import Heading from "@/components/ui/Heading";

export default function HollowKnightPage() {
  return (
    <div>
      <Heading>Hollow Knight</Heading>
      <Image
        className="rounded mb-2"
        src="/img/hollow-knight.jpg"
        width="640"
        height="320"
        alt="Hollow Knight"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        adipisci voluptatibus ea, omnis eius enim ullam aliquid? Itaque eligendi
        sint dignissimos fuga, doloribus optio ducimus asperiores necessitatibus
        modi commodi magni.
      </p>
    </div>
  );
}
