"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CLINICS } from "../data/clinic.data"
import { ClinicDetails } from "./ClinicDetails"
import { ClinicDots } from "./ClinicDots"

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
          className="object-cover"
          priority
        />

        {/* DARK LEFT EDGE (depth) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* DYNAMIC BLUR ZONE */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* Layer 1 (soft blur) */}
          <div className="absolute inset-y-0 right-0 w-2/3 backdrop-blur-[2px]" />

          {/* Layer 2 (medium blur) */}
          <div className="absolute inset-y-0 right-0 w-1/2 backdrop-blur-[4px]" />

          {/* Layer 3 (strong blur near text) */}
          <div className="absolute inset-y-0 right-0 w-1/3 backdrop-blur-[6px]" />

        </div>

        {/* LIGHT FADE (for readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white/90" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12">
          
          <div className="w-full max-w-md">
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
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