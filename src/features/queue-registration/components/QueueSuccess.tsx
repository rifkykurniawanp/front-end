// src/features/queue-registration/components/QueueSuccess.tsx

interface Props {
  name: string
  service: string
  date: string
  onReset: () => void
}

export const QueueSuccess = ({ name, service, date, onReset }: Props) => (
  <div className="flex flex-col items-center text-center gap-5 py-6">
    {/* Icon */}
    <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
      <svg
        className="w-8 h-8 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    {/* Text */}
    <div className="space-y-1">
      <h3 className="text-lg font-semibold text-slate-800">
        Pendaftaran Berhasil!
      </h3>
      <p className="text-sm text-slate-500">
        Terima kasih, <span className="font-medium text-slate-700">{name}</span>.
        Pendaftaran antrian <span className="font-medium text-teal-700">{service}</span> pada{" "}
        <span className="font-medium text-slate-700">{date}</span> telah diterima.
      </p>
    </div>

    {/* Info box */}
    <div className="w-full rounded-xl bg-teal-50 border border-teal-100 px-4 py-3 text-sm text-teal-700 text-left space-y-1">
      <p className="font-medium">Informasi selanjutnya:</p>
      <ul className="text-xs text-teal-600 space-y-0.5 list-disc list-inside">
        <li>Harap datang 10 menit sebelum jadwal</li>
        <li>Bawa kartu identitas (KTP/KK)</li>
        <li>Konfirmasi kehadiran dapat dilakukan via WhatsApp</li>
      </ul>
    </div>

    <button
      onClick={onReset}
      className="text-sm text-slate-400 hover:text-teal-700 transition-colors underline underline-offset-2"
    >
      Daftar antrian lagi
    </button>
  </div>
)
