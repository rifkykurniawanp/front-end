// features/hero/data/hero.data.ts

import type { HeroData } from "../types"
import heroImage         from "@/public/assets/profile-1.webp"

export const heroData: HeroData = {
  subtitle    : "Praktik Mandiri dr. Rifky Kurniawan",
  title       : "Menjaga Kesehatan Anda adalah Prioritas Saya",
  description : "Menjadi sehat bukan hanya sekadar tidak sakit, tetapi menjadi baik secara fisik, mental, dan sosial.",
  primaryCta  : {
    label: "Daftar Antrian Online",
    href : "#daftar-antrian",
  },
  secondaryCta: {
    label: "Pelajari Lebih Lanjut",
    href : "#features",
  },
  image    : heroImage,
  imageAlt : "dr. Rifky Kurniawan — Dokter Umum Praktik Mandiri",
}