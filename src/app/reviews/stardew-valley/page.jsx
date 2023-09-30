import { readFile } from "node:fs/promises";
import { marked } from "marked";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

export default async function StardewValleyPage() {
  const markdownText = await readFile(
    "./content/reviews/stardew-valley.md",
    "utf8"
  );
  const markdownHtml = marked(markdownText);

  return (
    <article>
      <Heading>Stardew Valley</Heading>
      <Image
        className="rounded mb-2"
        src="/img/stardew-valley.jpg"
        width="640"
        height="320"
        alt="Stardew Valley"
      />
      <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
    </article>
  );
}
