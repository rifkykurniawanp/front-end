// src/features/health-education/components/toolbar/HealthEducationSearch.tsx
"use client"

interface Props {
  value: string
  onChange: (val: string) => void
}

export const HealthEducationSearch = ({ value, onChange }: Props) => (
  <input
    type="text"
    placeholder="Cari edukasi kesehatan..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full md:w-64 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
  />
)
