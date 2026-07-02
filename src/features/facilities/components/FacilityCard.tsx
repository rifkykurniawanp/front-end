"use client"

import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type { FacilityItem } from "../types"

interface Props {
  item: FacilityItem
}

export function FacilityCard({ item }: Props) {
  const router = useRouter()

  const isClickable = !!item.href

  const handleClick = () => {
    if (item.href) router.push(item.href)
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col justify-between",
        "p-6 md:p-7 rounded-2xl",
        "border border-slate-200",
        "bg-white",
        "transition-all duration-300",

        isClickable
          ? "cursor-pointer hover:shadow-lg hover:-translate-y-1"
          : "hover:shadow-sm"
      )}
    >
      {/* CONTENT */}
      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          {item.title}
        </h3>

        <ul className="mt-3 space-y-1 text-sm text-slate-600">
          {item.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {isClickable && (
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-teal-600">
          Daftar Sekarang
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      )}
    </div>
  )
}