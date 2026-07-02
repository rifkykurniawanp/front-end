import type { HighlightItem } from "../types";
import { HighlightCard } from "./HighlightCard";

interface HighlightGridProps {
  items: HighlightItem[];
}

export function HighlightGrid({ items }: HighlightGridProps) {
  return (
    <div
      className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {items.map((item, index) => (
        <HighlightCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}