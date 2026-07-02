
import type { BrochureContent } from "../types"

export const BROCHURES_DATA: BrochureContent[] = [
  {
    id: "brosur-imunisasi-bayi",
    type: "brochure",
    title: "Jadwal Imunisasi Lengkap Bayi 0–12 Bulan",
    description: "Panduan jadwal imunisasi dasar sesuai rekomendasi IDAI.",
    pdfUrl: "/files/education/imunisasi-bayi.pdf",
    fileSize: "1.2 MB",
    audience: ["anak"],
    createdAt: "2024-10-10",
    tags: ["imunisasi", "bayi", "jadwal"],
  },
  {
    id: "brosur-diet-diabetes",
    type: "brochure",
    title: "Panduan Diet untuk Penderita Diabetes Melitus",
    description: "Rekomendasi pola makan sehat bagi pasien diabetes tipe 2.",
    pdfUrl: "/files/education/diet-diabetes.pdf",
    fileSize: "980 KB",
    audience: ["dewasa"],
    createdAt: "2024-09-20",
    tags: ["diabetes", "diet", "dewasa"],
  },
]
