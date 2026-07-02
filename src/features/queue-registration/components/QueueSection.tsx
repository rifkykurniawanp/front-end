// src/features/queue-registration/components/QueueSection.tsx
"use client"

import { useQueueForm } from "../hooks/useQueueForm"
import { QueueForm } from "./QueueForm"
import { QueueSuccess } from "./QueueSuccess"
import { PRACTICE_HOURS } from "../utils/constants"
import { SERVICE_OPTIONS } from "../utils/constants"

export const QueueSection = () => {
  const { form, errors, setField, submit, reset, isSubmitting, isSuccess,
          selectedLocation, availableTimeSlots, isSelectedDateValid } = useQueueForm()

  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.value === form.service)?.label ?? ""

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Left — info */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                Antrian Online
              </p>
              <h2 className="text-2xl font-semibold text-slate-800 leading-snug">
                Daftar Antrian<br />Tanpa Perlu Menunggu
              </h2>
              <p className="text-sm text-slate-500">
                Isi form pendaftaran dan datang sesuai jadwal. Tidak perlu antri dari pagi.
              </p>
            </div>

            {/* Jam praktik */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Jam Praktik
                </span>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Senin – Jumat</span>
                  <span className="font-medium text-slate-700">{PRACTICE_HOURS.weekday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sabtu – Minggu</span>
                  <span className="font-medium text-slate-700">{PRACTICE_HOURS.weekend}</span>
                </div>
              </div>
            </div>

            {/* Layanan tersedia */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Layanan Tersedia
              </p>
              <div className="space-y-2">
                {SERVICE_OPTIONS.map((s) => (
                  <div key={s.value} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-slate-700">{s.label}</span>
                      <span className="text-xs text-slate-400 ml-2">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
              {isSuccess ? (
                <QueueSuccess
                  name={form.name}
                  service={serviceLabel}
                  date={new Date(form.date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  onReset={reset}
                />
              ) : (
                <>
                  <div className="mb-5">
                    <h3 className="text-base font-semibold text-slate-800">
                      Form Pendaftaran
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Semua field bertanda <span className="text-red-400">*</span> wajib diisi
                    </p>
                  </div>
                  <QueueForm
                    form={form}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    selectedLocation={selectedLocation}
                    availableTimeSlots={availableTimeSlots}
                    isSelectedDateValid={isSelectedDateValid}
                    setField={setField}
                    onSubmit={submit}
                  />
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
