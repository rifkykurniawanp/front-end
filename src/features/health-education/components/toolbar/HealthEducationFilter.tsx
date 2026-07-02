"use client"

import type { EducationType, Audience } from "../../types"
import { EDUCATION_TYPE_OPTIONS, AUDIENCE_OPTIONS } from "../../utils/constants"

interface Props {
  type: EducationType | "all"
  audience: Audience | "all"
  onTypeChange: (val: EducationType | "all") => void
  onAudienceChange: (val: Audience | "all") => void
}

export const HealthEducationFilter = ({
  type,
  audience,
  onTypeChange,
  onAudienceChange,
}: Props) => (
  <div className="flex flex-wrap gap-2">
    <select
      value={type}
      onChange={(e) => onTypeChange(e.target.value as EducationType | "all")}
      className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
    >
      {EDUCATION_TYPE_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>

    <select
      value={audience}
      onChange={(e) => onAudienceChange(e.target.value as Audience | "all")}
      className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
    >
      {AUDIENCE_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
)
