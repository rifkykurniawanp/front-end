// src/features/health-education/components/section/HealthEducationEmpty.tsx

export const HealthEducationEmpty = () => (
  <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400">
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-sm">Tidak ada konten ditemukan.</p>
    <p className="text-xs">Coba ubah kata kunci atau filter pencarian.</p>
  </div>
)
