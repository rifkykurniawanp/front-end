"use client"

import Link from "next/link"
import { FOOTER_CLINIC } from "./footer.constant"

export const FooterCTA = () => (
  <section className="bg-teal-700 text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-sm md:text-base font-medium">
        Butuh konsultasi atau ingin daftar antrian?
      </p>

      <div className="flex gap-3">
        <Link
          href="/antrian"
          className="px-4 py-2 rounded-lg bg-white text-teal-700 text-sm font-semibold hover:bg-slate-100 transition"
        >
          Daftar Sekarang
        </Link>

        <a
          href={FOOTER_CLINIC.whatsapp}
          target="_blank"
          className="px-4 py-2 rounded-lg border border-white text-sm font-semibold hover:bg-white/10 transition"
        >
          WhatsApp
        </a>
      </div>

    </div>
  </section>
)