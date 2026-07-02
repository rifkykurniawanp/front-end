import type { Audience, EducationType } from "../types"

export const EDUCATION_TYPE_LABEL: Record<EducationType, string> = {
  article:      "Artikel",
  video:        "Video",
  brochure:     "Brosur",
  lab:          "Nilai Lab",
  growth:       "Tumbuh Kembang",
  professional: "Profesional",
}

export const AUDIENCE_LABEL: Record<Audience, string> = {
  anak:   "Anak",
  remaja: "Remaja",
  dewasa: "Dewasa",
  semua:  "Semua Umur",
}

export const EDUCATION_TYPE_OPTIONS = [
  { value: "all" as const, label: "Semua Tipe" },
  ...Object.entries(EDUCATION_TYPE_LABEL).map(([value, label]) => ({
    value: value as EducationType,
    label,
  })),
]

export const AUDIENCE_OPTIONS = [
  { value: "all" as const, label: "Semua Umur" },
  ...Object.entries(AUDIENCE_LABEL).map(([value, label]) => ({
    value: value as Audience,
    label,
  })),
]
