// src/features/health-education/components/toolbar/HealthEducationToolbar.tsx
"use client"

import type { EducationType, Audience } from "../../types"
import { HealthEducationSearch } from "./HealthEducationSearch"
import { HealthEducationFilter } from "./HealthEducationFilter"

interface Props {
  query: string
  type: EducationType | "all"
  audience: Audience | "all"
  setQuery: (val: string) => void
  setType: (val: EducationType | "all") => void
  setAudience: (val: Audience | "all") => void
}

export const HealthEducationToolbar = ({
  query,
  type,
  audience,
  setQuery,
  setType,
  setAudience,
}: Props) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <HealthEducationSearch value={query} onChange={setQuery} />
    <HealthEducationFilter
      type={type}
      audience={audience}
      onTypeChange={setType}
      onAudienceChange={setAudience}
    />
  </div>
)
