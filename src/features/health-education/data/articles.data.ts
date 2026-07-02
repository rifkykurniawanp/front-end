import type { ArticleContent } from "../types"

export const ARTICLES_DATA: ArticleContent[] = [
  {
    id: "artikel-demam-anak",
    type: "article",
    title: "Cara Menangani Demam pada Anak di Rumah",
    description:
      "Panduan praktis untuk orang tua dalam menangani demam anak sebelum ke dokter.",
    thumbnail: "/images/education/demam-anak.jpg",
    author: "dr. Rifky Kurniawan",
    readTime: 5,
    audience: ["anak", "semua"],
    createdAt: "2024-11-01",
    tags: ["demam", "anak", "pertolongan pertama"],
  },
  {
    id: "artikel-diare-balita",
    type: "article",
    title: "Mengenal Diare pada Balita dan Cara Mencegahnya",
    description:
      "Diare adalah salah satu penyebab utama kematian balita. Kenali gejala dan cara pencegahannya.",
    thumbnail: "/images/education/diare-balita.jpg",
    author: "dr. Rifky Kurniawan",
    readTime: 7,
    audience: ["anak", "semua"],
    createdAt: "2024-10-15",
    tags: ["diare", "balita", "pencegahan"],
  },
  {
    id: "artikel-hipertensi-dewasa",
    type: "article",
    title: "Hipertensi: Si 'Pembunuh Diam-diam' yang Perlu Diwaspadai",
    description:
      "Hipertensi sering tidak bergejala namun berisiko tinggi menyebabkan stroke dan gagal jantung.",
    thumbnail: "/images/education/hipertensi.jpg",
    author: "dr. Rifky Kurniawan",
    readTime: 6,
    audience: ["dewasa"],
    createdAt: "2024-10-01",
    tags: ["hipertensi", "jantung", "dewasa"],
  },
]
