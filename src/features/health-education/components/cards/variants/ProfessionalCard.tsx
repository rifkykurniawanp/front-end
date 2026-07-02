// src/features/health-education/components/cards/variants/ProfessionalCard.tsx
// 🚧 Stub — aktifkan saat tipe "professional" siap dipakai

import type { ProfessionalContent } from "../../../types"

interface Props { data: ProfessionalContent }

export const ProfessionalCard = ({ data }: Props) => (
  <div className="rounded-xl border border-slate-200 p-4 space-y-2 hover:shadow-md hover:border-teal-200 transition-all duration-200">
    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium">
      {data.level === "dokter" ? "Dokter" : "Tenaga Medis"}
    </span>
    <h3 className="font-semibold text-sm text-slate-800">{data.title}</h3>
    {data.description && (
      <p className="text-xs text-slate-500 line-clamp-2">{data.description}</p>
    )}
    {data.source && <p className="text-xs text-slate-400">{data.source}</p>}
  </div>
)
