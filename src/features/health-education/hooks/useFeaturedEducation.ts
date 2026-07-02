import type { EducationContent, ArticleContent } from "../types"

interface UseFeaturedEducationParams {
  data: EducationContent[]
  heroCount?: number    // default: 1
  sidebarCount?: number // default: 2
}

interface UseFeaturedEducationReturn {
  hero: ArticleContent | null
  sidebar: EducationContent[]
  hasContent: boolean
}

export const useFeaturedEducation = ({
  data,
  heroCount = 1,
  sidebarCount = 2,
}: UseFeaturedEducationParams): UseFeaturedEducationReturn => {
  // Hero: artikel terbaru
  const articles = data
    .filter((item): item is ArticleContent => item.type === "article")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const hero = articles[0] ?? null

  // Sidebar: konten lain di luar hero, prioritas artikel lalu tipe lain
  const heroId = hero?.id
  const remaining = data
    .filter((item) => item.id !== heroId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const sidebar = remaining.slice(0, sidebarCount)

  return {
    hero,
    sidebar,
    hasContent: !!hero,
  }
}
