// src/features/health-education/utils/filter.utils.ts

import type { EducationContent, EducationType, Audience } from "../types"

export interface FilterParams {
  query?: string
  type?: EducationType | "all"
  audience?: Audience | "all"
  tags?: string[]
  sortBy?: "latest" | "oldest"
}

export const filterEducation = (
  data: EducationContent[],
  params: FilterParams
): EducationContent[] => {
  const {
    query,
    type = "all",
    audience = "all",
    tags,
    sortBy = "latest",
  } = params

  let result = [...data]

  if (query?.trim()) {
    const q = query.toLowerCase().trim()
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(q))
    )
  }

  if (type !== "all") {
    result = result.filter((item) => item.type === type)
  }

  if (audience !== "all") {
    result = result.filter((item) => item.audience.includes(audience))
  }

  if (tags && tags.length > 0) {
    result = result.filter((item) =>
      item.tags?.some((tag) => tags.includes(tag))
    )
  }

  result.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return sortBy === "latest" ? dateB - dateA : dateA - dateB
  })

  return result
}
