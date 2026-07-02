// src/features/queue-registration/types/index.ts

export type ServiceType = "poli-umum" | "khitan" | "homecare"

export type QueueStatus = "idle" | "submitting" | "success" | "error"

// 0=Minggu, 1=Senin, ... 6=Sabtu (sama dengan Date.getDay())
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface ClinicLocation {
  id: string
  name: string
  address: string
  availableDays: DayOfWeek[]   // hari praktik
  openTime: string             // "08:00"
  closeTime: string            // "12:00"
  slotDurationMinutes: number  // interval antar slot, misal 60
}

export interface QueueFormData {
  name: string
  phone: string
  service: ServiceType | ""
  locationId: string           // hanya untuk poli-umum
  date: string
  time: string                 // slot jam yang dipilih
  complaint: string
}

export interface QueueFormErrors {
  name?: string
  phone?: string
  service?: string
  locationId?: string
  date?: string
  time?: string
  complaint?: string
}
