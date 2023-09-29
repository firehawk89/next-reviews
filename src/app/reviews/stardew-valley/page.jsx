import Image from "next/image";
import Heading from "@/components/ui/Heading";

export default function StardewValleyPage() {
  return (
    <div>
      <Heading>Stardew Valley</Heading>
      <Image
        className="rounded mb-2"
        src="/img/stardew-valley.jpg"
        width="640"
        height="320"
        alt="Stardew Valley"
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
