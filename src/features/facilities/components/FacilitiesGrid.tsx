import type { FacilityItem } from "../types"
import { FacilityCard } from "./FacilityCard"

interface Props {
  items: FacilityItem[]
}

export function FacilitiesGrid({ items }: Props) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <FacilityCard key={item.id} item={item} />
      ))}
    </div>
  )
}