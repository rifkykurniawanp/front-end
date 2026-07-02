// src/features/queue-registration/components/QueueForm.tsx
"use client"

import type { QueueFormData, QueueFormErrors, ClinicLocation } from "../types"
import type { ServiceType } from "../types"
import {
  SERVICE_OPTIONS,
  CLINIC_LOCATIONS,
  getDateRange,
  formatAvailableDays,
  isDateAvailable,
} from "../utils/constants"
import { cn } from "@/lib/utils"

interface Props {
  form: QueueFormData
  errors: QueueFormErrors
  isSubmitting: boolean
  availableTimeSlots: string[]
  isSelectedDateValid: boolean
  selectedLocation: ClinicLocation | null
  setField: <K extends keyof QueueFormData>(key: K, value: QueueFormData[K]) => void
  onSubmit: () => void
}

// ─── Field wrapper ────────────────────────────────────────────
const Field = ({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) => (
  <div className="space-y-1.5">
    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
      {label}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-xs text-red-500 flex items-center gap-1">
        <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
        {error}
      </p>
    )}
  </div>
)

const inputCls = (error?: string) =>
  cn(
    "w-full px-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder:text-slate-300",
    "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition",
    error ? "border-red-300 bg-red-50/40" : "border-slate-200 bg-white hover:border-slate-300"
  )

// ─── Main Form ────────────────────────────────────────────────
export const QueueForm = ({
  form,
  errors,
  isSubmitting,
  availableTimeSlots,
  isSelectedDateValid,
  selectedLocation,
  setField,
  onSubmit,
}: Props) => {
  const { min, max } = getDateRange()
  const isPoliUmum = form.service === "poli-umum"

  return (
    <div className="space-y-4">
      {/* Nama + No HP */}
      <div className="grid grid-cols-2 gap-3">
        <Field label="Nama Lengkap" error={errors.name} required>
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className={inputCls(errors.name)}
          />
        </Field>
        <Field label="Nomor HP" error={errors.phone} required>
          <input
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={inputCls(errors.phone)}
          />
        </Field>
      </div>

      {/* Layanan */}
      <Field label="Layanan" error={errors.service} required>
        <div className="grid grid-cols-3 gap-2">
          {SERVICE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setField("service", opt.value as ServiceType)}
              className={cn(
                "flex flex-col items-start gap-0.5 px-3 py-2.5 rounded-xl border text-left transition-all duration-150",
                form.service === opt.value
                  ? "border-teal-500 bg-teal-50 ring-1 ring-teal-500"
                  : errors.service
                  ? "border-red-200 hover:border-teal-300"
                  : "border-slate-200 hover:border-teal-300 hover:bg-teal-50/40"
              )}
            >
              <span className={cn("text-xs font-semibold", form.service === opt.value ? "text-teal-700" : "text-slate-700")}>
                {opt.label}
              </span>
              <span className="text-[10px] text-slate-400 leading-tight">{opt.desc}</span>
            </button>
          ))}
        </div>
      </Field>

      {/* Lokasi — hanya muncul untuk Poli Umum */}
      {isPoliUmum && (
        <Field label="Lokasi Praktik" error={errors.locationId} required>
          <div className="grid grid-cols-1 gap-2">
            {CLINIC_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setField("locationId", loc.id)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all duration-150",
                  form.locationId === loc.id
                    ? "border-teal-500 bg-teal-50 ring-1 ring-teal-500"
                    : errors.locationId
                    ? "border-red-200 hover:border-teal-300"
                    : "border-slate-200 hover:border-teal-300 hover:bg-teal-50/40"
                )}
              >
                <div className="space-y-0.5">
                  <p className={cn("text-sm font-semibold", form.locationId === loc.id ? "text-teal-700" : "text-slate-700")}>
                    {loc.name}
                  </p>
                  <p className="text-xs text-slate-400">{loc.address}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-xs font-medium text-slate-600">
                    {formatAvailableDays(loc.availableDays)}
                  </p>
                  <p className="text-xs text-teal-600 font-semibold">
                    {loc.openTime} – {loc.closeTime}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </Field>
      )}

      {/* Tanggal */}
      <Field label="Tanggal Kunjungan" error={errors.date} required>
        <input
          type="date"
          min={min}
          max={max}
          value={form.date}
          onChange={(e) => setField("date", e.target.value)}
          disabled={isPoliUmum && !form.locationId}
          className={cn(
            inputCls(errors.date),
            isPoliUmum && !form.locationId && "opacity-40 cursor-not-allowed"
          )}
        />
        {/* Warning kalau tanggal tidak sesuai jadwal lokasi */}
        {form.date && selectedLocation && !isSelectedDateValid && (
          <p className="text-xs text-amber-600 flex items-center gap-1 mt-1">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            {selectedLocation.name} tidak praktik pada hari ini. Pilih hari {formatAvailableDays(selectedLocation.availableDays)}.
          </p>
        )}
      </Field>

      {/* Jam — muncul setelah tanggal valid dipilih */}
      {availableTimeSlots.length > 0 && isSelectedDateValid && form.date && (
        <Field label="Jam Kunjungan" error={errors.time} required>
          <div className="flex flex-wrap gap-2">
            {availableTimeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setField("time", slot)}
                className={cn(
                  "px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-150",
                  form.time === slot
                    ? "border-teal-500 bg-teal-500 text-white"
                    : "border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50/40"
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </Field>
      )}

      {/* Jam untuk Khitan & Homecare — input manual */}
      {!isPoliUmum && form.service && (
        <Field label="Jam Kunjungan" error={errors.time} required>
          <input
            type="time"
            value={form.time}
            onChange={(e) => setField("time", e.target.value)}
            className={inputCls(errors.time)}
          />
        </Field>
      )}

      {/* Keluhan */}
      <Field label="Keluhan" error={errors.complaint} required>
        <textarea
          rows={3}
          placeholder="Ceritakan keluhan atau kondisi yang ingin dikonsultasikan..."
          value={form.complaint}
          onChange={(e) => setField("complaint", e.target.value)}
          className={cn(inputCls(errors.complaint), "resize-none")}
        />
      </Field>

      {/* Submit */}
      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200",
          isSubmitting
            ? "bg-teal-400 text-white cursor-not-allowed"
            : "bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98]"
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Mendaftarkan...
          </span>
        ) : "Daftar Antrian Sekarang"}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        Dengan mendaftar, Anda menyetujui data digunakan untuk keperluan medis.
      </p>
    </div>
  )
}
