// src/features/queue-registration/hooks/useQueueForm.ts
"use client"

import { useState, useMemo } from "react"
import type { QueueFormData, QueueFormErrors, QueueStatus } from "../types"
import {
  CLINIC_LOCATIONS,
  generateTimeSlots,
  isDateAvailable,
} from "../utils/constants"

const INITIAL_FORM: QueueFormData = {
  name:       "",
  phone:      "",
  service:    "",
  locationId: "",
  date:       "",
  time:       "",
  complaint:  "",
}

const validate = (data: QueueFormData): QueueFormErrors => {
  const errors: QueueFormErrors = {}
  const isPoliUmum = data.service === "poli-umum"

  if (!data.name.trim() || data.name.trim().length < 3)
    errors.name = !data.name.trim() ? "Nama lengkap wajib diisi" : "Nama minimal 3 karakter"

  if (!data.phone.trim())
    errors.phone = "Nomor HP wajib diisi"
  else if (!/^(\+62|08)[0-9]{8,12}$/.test(data.phone.trim()))
    errors.phone = "Format tidak valid (contoh: 081234567890)"

  if (!data.service)
    errors.service = "Pilih layanan yang diinginkan"

  if (isPoliUmum && !data.locationId)
    errors.locationId = "Pilih lokasi praktik"

  if (!data.date)
    errors.date = "Pilih tanggal kunjungan"

  if (!data.time)
    errors.time = "Pilih jam kunjungan"

  if (!data.complaint.trim() || data.complaint.trim().length < 10)
    errors.complaint = !data.complaint.trim()
      ? "Keluhan wajib diisi"
      : "Keluhan minimal 10 karakter"

  return errors
}

export const useQueueForm = () => {
  const [form, setForm]     = useState<QueueFormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<QueueFormErrors>({})
  const [status, setStatus] = useState<QueueStatus>("idle")

  const setField = <K extends keyof QueueFormData>(key: K, value: QueueFormData[K]) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      // Reset downstream fields on change
      if (key === "service")    { next.locationId = ""; next.date = ""; next.time = "" }
      if (key === "locationId") { next.date = ""; next.time = "" }
      if (key === "date")       { next.time = "" }
      return next
    })
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  // Lokasi yang dipilih
  const selectedLocation = useMemo(
    () => CLINIC_LOCATIONS.find((l) => l.id === form.locationId) ?? null,
    [form.locationId]
  )

  // Slot jam tersedia berdasar lokasi
  const availableTimeSlots = useMemo(
    () => (selectedLocation ? generateTimeSlots(selectedLocation) : []),
    [selectedLocation]
  )

  // Cek apakah tanggal yang dipilih valid untuk lokasi
  const isSelectedDateValid = useMemo(
    () =>
      selectedLocation && form.date
        ? isDateAvailable(form.date, selectedLocation)
        : true,
    [selectedLocation, form.date]
  )

  const submit = async () => {
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus("submitting")
    // 🔄 Nanti: await queueService.create(form)
    await new Promise((res) => setTimeout(res, 1200))
    setStatus("success")
  }

  const reset = () => { setForm(INITIAL_FORM); setErrors({}); setStatus("idle") }

  return {
    form,
    errors,
    status,
    setField,
    submit,
    reset,
    selectedLocation,
    availableTimeSlots,
    isSelectedDateValid,
    isSubmitting: status === "submitting",
    isSuccess:    status === "success",
  }
}
