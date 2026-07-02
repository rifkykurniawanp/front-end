export type EducationType =
  | "article"
  | "video"
  | "brochure"
  | "lab"
  | "growth"
  | "professional"

export type Audience = "anak" | "remaja" | "dewasa" | "semua"

export interface BaseEducationContent {
  id: string
  type: EducationType
  title: string
  description?: string
  thumbnail?: string
  audience: Audience[]
  createdAt: string
  tags?: string[]
}
