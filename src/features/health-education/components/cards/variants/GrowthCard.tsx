// src/features/health-education/components/cards/variants/GrowthCard.tsx
// 🚧 Stub — aktifkan saat tipe "growth" siap dipakai

import type { GrowthContent } from "../../../types"

interface Props { data: GrowthContent }

export const GrowthCard = ({ data }: Props) => (
  <div className="rounded-xl border border-slate-200 p-4 space-y-3 hover:shadow-md hover:border-teal-200 transition-all duration-200">
    <div className="h-28 bg-slate-50 rounded-lg flex items-center justify-center">
      <span className="text-xs text-slate-400">Chart Preview</span>
    </div>
    <div className="space-y-1">
      <h3 className="font-semibold text-sm text-slate-800">{data.title}</h3>
      {data.description && (
        <p className="text-xs text-slate-500">{data.description}</p>
      )}
    </div>
    <span className="text-xs text-slate-400">Usia: {data.ageRange}</span>
  </div>
)
