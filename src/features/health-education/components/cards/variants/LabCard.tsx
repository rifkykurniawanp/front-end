// src/features/health-education/components/cards/variants/LabCard.tsx

import type { LabContent } from "../../../types"

interface Props {
  data: LabContent
}

export const LabCard = ({ data }: Props) => (
  <div className="rounded-xl border border-slate-200 p-4 space-y-2 hover:shadow-md hover:border-teal-200 transition-all duration-200">
    <h3 className="font-semibold text-sm text-slate-800">{data.title}</h3>
    {data.description && (
      <p className="text-xs text-slate-500">{data.description}</p>
    )}
    <div className="mt-2 rounded-lg bg-teal-50 px-3 py-2 text-xs text-teal-800">
      <span className="font-medium">Nilai Normal: </span>
      {data.normalRange}
      {data.unit && <span className="text-teal-500 ml-1">({data.unit})</span>}
    </div>
  </div>
)
