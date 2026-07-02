import type { EducationContent } from "../../types"
import { EducationCard } from "../cards/EducationCard"
import { HealthEducationEmpty } from "./HealthEducationEmpty"

interface Props {
  data: EducationContent[]
}

export const HealthEducationGrid = ({ data }: Props) => {
  if (!data.length) return <HealthEducationEmpty />

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <EducationCard key={item.id} data={item} />
      ))}
    </div>
  )
}
