// src/features/queue-registration/utils/constants.ts

import type { ServiceType, ClinicLocation, DayOfWeek } from "../types"

export const SERVICE_OPTIONS: { value: ServiceType; label: string; desc: string }[] = [
  { value: "poli-umum", label: "Poli Umum",  desc: "Pemeriksaan & konsultasi umum" },
  { value: "khitan",    label: "Khitan",     desc: "Khitan medis dengan anestesi lokal" },
  { value: "homecare",  label: "Homecare",   desc: "Kunjungan dokter ke rumah" },
]

// ─── 3 Lokasi praktik Poli Umum ──────────────────────────────
// 🔄 Edit nama, alamat, hari, dan jam sesuai data asli
export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: "klinik-a",
    name: "Klinik Pratama A",
    address: "Jl. Contoh No. 1, Semarang",
    availableDays: [1, 2, 3, 4, 5], // Senin–Jumat
    openTime: "08:00",
    closeTime: "12:00",
    slotDurationMinutes: 60,
  },
  {
    id: "klinik-b",
    name: "Klinik Pratama B",
    address: "Jl. Contoh No. 2, Semarang",
    availableDays: [0, 6], // Sabtu–Minggu
    openTime: "13:00",
    closeTime: "16:00",
    slotDurationMinutes: 60,
  },
  {
    id: "klinik-c",
    name: "Klinik Pratama C",
    address: "Jl. Contoh No. 3, Semarang",
    availableDays: [0, 1, 2, 3, 4, 5, 6], // Setiap hari
    openTime: "16:00",
    closeTime: "19:00",
    slotDurationMinutes: 60,
  },
]

// ─── Jam praktik ringkas (untuk info sidebar) ─────────────────
export const PRACTICE_HOURS = {
  weekday: "08.00–12.00 & 16.00–19.00",
  weekend: "13.00–16.00 & 16.00–19.00",
}

// ─── Helpers ──────────────────────────────────────────────────

// Label hari
export const DAY_LABEL: Record<DayOfWeek, string> = {
  0: "Minggu", 1: "Senin", 2: "Selasa",
  3: "Rabu",   4: "Kamis", 5: "Jumat", 6: "Sabtu",
}

// Format "Senin–Jumat" dari availableDays
export const formatAvailableDays = (days: DayOfWeek[]): string => {
  if (days.length === 7) return "Setiap hari"
  const sorted = [...days].sort((a, b) => a - b)
  if (sorted.length === 2 && sorted[1] - sorted[0] === 1)
    return `${DAY_LABEL[sorted[0]]} & ${DAY_LABEL[sorted[1]]}`
  if (sorted.length >= 2) {
    const first = DAY_LABEL[sorted[0]]
    const last  = DAY_LABEL[sorted[sorted.length - 1]]
    return `${first}–${last}`
  }
  return DAY_LABEL[sorted[0]]
}

// Generate slot jam dari openTime–closeTime per slotDuration
export const generateTimeSlots = (location: ClinicLocation): string[] => {
  const slots: string[] = []
  const [openH, openM]   = location.openTime.split(":").map(Number)
  const [closeH, closeM] = location.closeTime.split(":").map(Number)
  const openTotal  = openH  * 60 + openM
  const closeTotal = closeH * 60 + closeM
  for (let t = openTotal; t < closeTotal; t += location.slotDurationMinutes) {
    const h = Math.floor(t / 60).toString().padStart(2, "0")
    const m = (t % 60).toString().padStart(2, "0")
    slots.push(`${h}:${m}`)
  }
  return slots
}

// Cek apakah tanggal tersedia untuk lokasi tertentu
export const isDateAvailable = (dateStr: string, location: ClinicLocation): boolean => {
  const day = new Date(dateStr).getDay() as DayOfWeek
  return location.availableDays.includes(day)
}

// Tanggal min/max untuk date input
export const getDateRange = () => {
  const today = new Date()
  const max   = new Date()
  max.setDate(today.getDate() + 30)
  return {
    min: today.toISOString().split("T")[0],
    max: max.toISOString().split("T")[0],
  }
}
