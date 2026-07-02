import { highlightData } from "../data/highlight.data";
import { HighlightGrid } from "./HighlightGrid";

export function HighlightSection() {
  const { items } = highlightData;

  return (
    <section
      id="highlight"
      className="
        w-full py-16 md:py-20
        bg-gradient-to-b from-teal-50/80 to-white
      "
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <HighlightGrid items={items} />
      </div>
    </section>
  );
}