"use client"

import Link              from "next/link"
import { useState, useEffect } from "react"
import { ark }           from "@ark-ui/react"
import { cn }            from "@/lib/utils"
import { NavLinks }      from "./NavLinks"
import { NavAuthButton } from "./NavAuthButton"
import { NavMobileMenu } from "./NavMobileMenu"
import { NavIcon }       from "./NavIcon"
import { NAV_CTA }       from "./Navbar.Constants"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <ark.header
      className={cn(
        "sticky top-0 z-40 w-full",
        "transition-all duration-300",
        "bg-white/95",
        isScrolled
          ? "border-b border-slate-200/80 backdrop-blur-md shadow-sm shadow-slate-200/40"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between",
          "transition-all duration-300",
          isScrolled ? "h-16" : "h-20",
        )}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg"
        >
          <div
            className={cn(
              "flex items-center justify-center rounded-xl bg-teal-700",
              "transition-all duration-300",
              // 🔥 lebih besar
              isScrolled ? "w-9 h-9" : "w-11 h-11",
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>

          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-semibold text-slate-900 transition-all duration-300",
                // 🔥 lebih readable
                isScrolled ? "text-sm" : "text-base",
              )}
            >
              Praktik
            </span>
            <span className="text-xs text-teal-600 font-medium">
              dr. Rifky Kurniawan
            </span>
          </div>
        </Link>

        <NavLinks />

        {/* ── Right side ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={NAV_CTA.href}
            className={cn(
              // 🔥 lebih besar & enak diklik
              "h-11 px-5 flex items-center rounded-xl",
              "bg-teal-700 text-white text-sm font-semibold",
              "hover:bg-teal-600 transition-all duration-150 active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
            )}
          >
            {NAV_CTA.label}
          </Link>

          <NavAuthButton />
        </div>

        {/* ── Mobile button ── */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          className={cn(
            "md:hidden flex items-center justify-center",
            // 🔥 dari 36px → 44px (touch friendly)
            "w-11 h-11 rounded-xl border border-slate-200",
            "text-slate-600 hover:bg-slate-50 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
          )}
        >
          <NavIcon name={mobileOpen ? "close" : "menu"} className="w-5 h-5" />
        </button>
      </div>

      <NavMobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </ark.header>
  )
}