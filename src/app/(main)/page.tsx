"use client"

import { Dialog } from "@ark-ui/react"

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <section className="text-center max-w-3xl px-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Solusi Kesehatan Modern & Terpercaya
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg">
          Menggabungkan teknologi dan pelayanan medis untuk memberikan
          pengalaman terbaik bagi pasien.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          
          {/* Ark UI Dialog */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm">
                Daftar Sekarang
              </button>
            </Dialog.Trigger>

            <Dialog.Backdrop className="fixed inset-0 bg-black/40" />

            <Dialog.Positioner className="fixed inset-0 flex items-center justify-center">
              <Dialog.Content className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
                
                <Dialog.Title className="text-lg font-semibold">
                  Pendaftaran Pasien
                </Dialog.Title>

                <Dialog.Description className="text-sm text-gray-600 mt-2">
                  Fitur ini akan segera tersedia.
                </Dialog.Description>

                <div className="mt-6 flex justify-end">
                  <Dialog.CloseTrigger asChild>
                    <button className="px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">
                      Tutup
                    </button>
                  </Dialog.CloseTrigger>
                </div>

              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Root>

          {/* Secondary Button */}
          <button className="px-5 py-2.5 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">
            Pelajari Lebih Lanjut
          </button>

        </div>
      </section>
    </main>
  )
}