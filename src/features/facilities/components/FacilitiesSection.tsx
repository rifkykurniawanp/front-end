import { FacilitiesGrid } from "./FacilitiesGrid"
import { facilitiesData } from "../data/facilities.data"

export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="
        w-full py-16 md:py-20
        bg-white
      "
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* HEADER */}
        <div className="mb-10 md:mb-12 max-w-xl">
          <p className="text-sm font-semibold text-teal-600">
            Layanan Klinik
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Fasilitas yang Tersedia
          </h2>

          <p className="mt-3 text-slate-600">
            Kami menyediakan layanan medis dasar hingga perawatan lanjutan
            dengan pendekatan yang nyaman dan profesional.
          </p>
        </div>

        {/* GRID */}
        <FacilitiesGrid items={facilitiesData} />
      </div>
    </section>
  )
}