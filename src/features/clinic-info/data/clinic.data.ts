// features/clinic-info/data/clinic.data.ts

import type { Clinic } from "../types"

export const CLINICS: Clinic[] = [
  {
    id: "1",
    name: "Klinik Rifky Utama",
    address: "Surabaya Timur",
    schedule: "Senin - Sabtu, 16.00 - 21.00",
    phone: "0812-3456-7890",
    image: "/images/clinic-1.jpg",
    mapsUrl: "https://maps.google.com",
  },
  {
    id: "2",
    name: "Klinik Rifky Barat",
    address: "Surabaya Barat",
    schedule: "Senin - Jumat, 17.00 - 21.00",
    phone: "0812-9999-8888",
    image: "/images/clinic-2.jpg",
    mapsUrl: "https://maps.google.com",
  },
  {
    id: "3",
    name: "Klinik Rifky Sidoarjo",
    address: "Sidoarjo",
    schedule: "Sabtu - Minggu, 09.00 - 15.00",
    phone: "0813-7777-6666",
    image: "/images/clinic-3.jpg",
    mapsUrl: "https://maps.google.com",
  },
]