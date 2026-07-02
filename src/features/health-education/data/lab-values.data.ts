// src/features/health-education/data/lab-values.data.ts
//
// 🔄 Migrasi ke API:
//   Hapus file ini, ganti pemanggilan di data/index.ts dengan:
//   const labValues = await labService.getAll()

import type { LabContent } from "../types"

export const LAB_VALUES_DATA: LabContent[] = [
  {
    id: "lab-hemoglobin",
    type: "lab",
    title: "Hemoglobin (Hb)",
    description: "Protein dalam sel darah merah yang berfungsi membawa oksigen ke seluruh tubuh.",
    parameter: "Hemoglobin",
    normalRange: "13–17 g/dL (pria) · 12–15 g/dL (wanita)",
    unit: "g/dL",
    audience: ["dewasa", "remaja"],
    createdAt: "2024-09-15",
    tags: ["lab", "darah", "anemia"],
  },
  {
    id: "lab-gula-darah-puasa",
    type: "lab",
    title: "Gula Darah Puasa (GDP)",
    description: "Kadar glukosa darah setelah puasa minimal 8 jam. Digunakan untuk skrining diabetes.",
    parameter: "Glukosa Darah Puasa",
    normalRange: "70–100 mg/dL",
    unit: "mg/dL",
    audience: ["dewasa", "semua"],
    createdAt: "2024-09-10",
    tags: ["lab", "gula darah", "diabetes"],
  },
  {
    id: "lab-asam-urat",
    type: "lab",
    title: "Asam Urat (Uric Acid)",
    description: "Produk akhir metabolisme purin. Kadar tinggi dapat menyebabkan gout.",
    parameter: "Asam Urat",
    normalRange: "3.5–7.2 mg/dL (pria) · 2.6–6.0 mg/dL (wanita)",
    unit: "mg/dL",
    audience: ["dewasa"],
    createdAt: "2024-09-05",
    tags: ["lab", "asam urat", "gout"],
  },
]
