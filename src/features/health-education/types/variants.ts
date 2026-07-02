
import type { BaseEducationContent } from "./base"

export interface ArticleContent extends BaseEducationContent {
  type: "article"
  author: string
  readTime: number // menit
  contentUrl?: string
}

export interface VideoContent extends BaseEducationContent {
  type: "video"
  videoUrl: string
  duration: number // detik
}

export interface BrochureContent extends BaseEducationContent {
  type: "brochure"
  pdfUrl: string
  fileSize?: string
}

export interface LabContent extends BaseEducationContent {
  type: "lab"
  parameter: string   // contoh: Hemoglobin
  normalRange: string // contoh: 13-17 g/dL
  unit?: string
}

export interface GrowthContent extends BaseEducationContent {
  type: "growth"
  ageRange: string
  chartType: "imunisasi" | "berat" | "tinggi" | "perkembangan"
}

export interface ProfessionalContent extends BaseEducationContent {
  type: "professional"
  journal?: string
  procedure?: string
  source?: string
  level: "dokter" | "tenaga_medis"
}
