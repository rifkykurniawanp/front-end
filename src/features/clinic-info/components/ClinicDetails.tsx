// ClinicDetails.tsx

import { Button } from "@/src/components/ui/Button"
import type { Clinic } from "../types"

export const ClinicDetails = ({ clinic }: { clinic: Clinic }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h3 className="text-xl font-semibold text-slate-900">
        {clinic.name}
      </h3>

      <div className="mt-4 space-y-2 text-slate-600 text-sm">
        <p>{clinic.address}</p>
        <p>{clinic.schedule}</p>
        <p>{clinic.phone}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="primary">
          Daftar
        </Button>

        <a href={clinic.mapsUrl} target="_blank">
          <Button variant="outline-teal">
            Lihat Maps
          </Button>
        </a>
      </div>
    </div>
  )
}