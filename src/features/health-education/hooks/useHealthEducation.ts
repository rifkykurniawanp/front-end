// src/features/health-education/hooks/useHealthEducation.ts
"use client"

import { useMemo, useState } from "react"
import type { EducationContent, EducationType, Audience } from "../types"
import { filterEducation } from "../utils/filter.utils"

interface UseHealthEducationParams {
  data: EducationContent[]
}

interface UseHealthEducationReturn {
  filteredData: EducationContent[]
  query: string
  type: EducationType | "all"
  audience: Audience | "all"
  sortBy: "latest" | "oldest"
  setQuery: (val: string) => void
  setType: (val: EducationType | "all") => void
  setAudience: (val: Audience | "all") => void
  setSortBy: (val: "latest" | "oldest") => void
  reset: () => void
  total: number
  totalFiltered: number
  isEmpty: boolean
}

export const useHealthEducation = ({
  data,
}: UseHealthEducationParams): UseHealthEducationReturn => {
  const [query, setQuery] = useState("")
  const [type, setType] = useState<EducationType | "all">("all")
  const [audience, setAudience] = useState<Audience | "all">("all")
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest")

  const filteredData = useMemo(
    () => filterEducation(data, { query, type, audience, sortBy }),
    [data, query, type, audience, sortBy]
  )

  const reset = () => {
    setQuery("")
    setType("all")
    setAudience("all")
    setSortBy("latest")
  }

  return {
    filteredData,
    query,
    type,
    audience,
    sortBy,
    setQuery,
    setType,
    setAudience,
    setSortBy,
    reset,
    total: data.length,
    totalFiltered: filteredData.length,
    isEmpty: filteredData.length === 0,
  }
}
