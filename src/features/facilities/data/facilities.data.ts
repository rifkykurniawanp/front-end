import type { FacilityItem } from "../types"

export const facilitiesData: FacilityItem[] = [
  {
    id: "poli-umum",
    title: "Poli Umum",
    features: [
      "Konsultasi dokter",
      "Perawatan luka",
      "Suntik KB",
    ],
  },
  {
    id: "lab",
    title: "Cek Lab Sederhana",
    features: [
      "Gula darah",
      "Kolesterol",
      "Asam urat",
    ],
  },
  {
    id: "khitan",
    title: "Khitan",
    features: [
      "Metode modern",
      "Metode tradisional",
    ],
    href: "/daftar/khitan",
  },
  {
    id: "home-care",
    title: "Home Care",
    features: [
      "Kunjungan ke rumah",
      "Perawatan pasien",
    ],
    href: "/daftar/home-care",
  },
]