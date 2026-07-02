"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CLINICS } from "../data/clinic.data"
import { ClinicDots } from "./ClinicDots"
import { Button } from "@/src/components/ui"
import type { Clinic } from "../types"

const ClinicDetails = ({ clinic }: { clinic: Clinic }) => {
  return (
    <div>
      {/* LABEL */}
      <p className="text-xs uppercase tracking-wider text-teal-700 font-semibold">
        Lokasi Klinik
      </p>

      {/* TITLE */}
      <h2 className="
        mt-3 
        text-3xl md:text-4xl lg:text-5xl 
        font-semibold 
        text-slate-900 
        leading-tight
      ">
        {clinic.name}
      </h2>

      {/* ADDRESS */}
      <p className="mt-5 text-lg text-slate-600">
        {clinic.address}
      </p>

      {/* DIVIDER */}
      <div className="my-6 h-px bg-slate-200" />

      {/* DETAIL */}
      <div className="space-y-4">
        <div>
          <p className="text-xs text-slate-400">Jam Praktik</p>
          <p className="text-base font-medium text-slate-800">
            {clinic.schedule}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">Kontak</p>
          <p className="text-base font-medium text-slate-800">
            {clinic.phone}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex gap-3">
        <Button size="lg" variant="primary">
          Daftar
        </Button>

        <a href={clinic.mapsUrl} target="_blank">
          <Button size="lg" variant="outline-teal">
            Lihat Maps
          </Button>
        </a>
      </div>
    </div>
  )
}

export const ClinicCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const startX = useRef(0)

  const clinic = CLINICS[activeIndex]

  // AUTO SLIDE
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CLINICS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  // SWIPE
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX

    if (diff > 50) {
      setActiveIndex((prev) => (prev + 1) % CLINICS.length)
    } else if (diff < -50) {
      setActiveIndex((prev) =>
        prev === 0 ? CLINICS.length - 1 : prev - 1
      )
    }

    setIsPaused(false)
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* MAIN VISUAL */}
      <div className="relative h-[520px] rounded-2xl overflow-hidden">

        {/* IMAGE */}
        <Image
          src={clinic.image}
          alt={clinic.name}
          fill
          priority
          className="object-cover"
        />

        {/* DARK LEFT (depth) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* DYNAMIC BLUR */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 right-0 w-2/3 backdrop-blur-[2px]" />
          <div className="absolute inset-y-0 right-0 w-1/2 backdrop-blur-[4px]" />
          <div className="absolute inset-y-0 right-0 w-1/3 backdrop-blur-[6px]" />
        </div>

        {/* LIGHT FADE */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white/90" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-16">
          
          <div className="w-full max-w-lg md:max-w-xl">
            <div className="bg-white/80 backdrop-blur rounded-xl p-8 shadow-lg">
              <ClinicDetails clinic={clinic} />
            </div>
          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="mt-4">
        <ClinicDots
          total={CLINICS.length}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />
      </div>
    </div>
  )
}