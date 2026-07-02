// src/features/health-education/components/section/HealthEducationSection.tsx
"use client"

import type { EducationContent } from "../../types"
import { useHealthEducation } from "../../hooks/useHealthEducation"
import { HealthEducationToolbar } from "../toolbar/HealthEducationToolbar"
import { HealthEducationGrid } from "./HealthEducationGrid"

interface Props {
  data: EducationContent[]
}

export const HealthEducationSection = ({ data }: Props) => {
  const {
    filteredData,
    query,
    type,
    audience,
    setQuery,
    setType,
    setAudience,
    totalFiltered,
    total,
  } = useHealthEducation({ data })

  return (
    <section className="py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-800">
          Edukasi Kesehatan
        </h1>
        <p className="text-sm text-slate-500">
          Informasi kesehatan terpercaya dari dr. Rifky Kurniawan
        </p>
      </div>

      {/* Toolbar */}
      <HealthEducationToolbar
        query={query}
        type={type}
        audience={audience}
        setQuery={setQuery}
        setType={setType}
        setAudience={setAudience}
      />

      {/* Result count */}
      <p className="text-xs text-slate-400">
        Menampilkan {totalFiltered} dari {total} konten
      </p>

      {/* Grid */}
      <HealthEducationGrid data={filteredData} />
    </section>
  )
}
