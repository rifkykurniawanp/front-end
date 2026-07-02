// src/components/layout/NavMobileMenu.tsx
// Mobile menu menggunakan Ark UI Collapsible untuk sub-menu accordion
// Keseluruhan drawer dibuka via state dari Navbar.tsx

"use client"

import Link              from "next/link"
import { usePathname }   from "next/navigation"
import { Collapsible }   from "@ark-ui/react"
import { cn }            from "@/lib/utils"
import { NavIcon, NavIconWithBg } from "./NavIcon"
import { NAV_ITEMS, NAV_CTA }     from "./Navbar.Constants"

interface NavMobileMenuProps {
  isOpen  : boolean
  onClose : () => void
}

export const NavMobileMenu = ({ isOpen, onClose }: NavMobileMenuProps) => {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Panel menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 z-40",
          "bg-white border-b border-slate-200 shadow-lg",
          "md:hidden",
          // Animasi slide down
          "animate-in fade-in-0 slide-in-from-top-2 duration-200",
        )}
      >
        <div className="px-4 py-3 space-y-1">
          {NAV_ITEMS.map(item => {
            const isActive = item.href
              ? pathname === item.href
              : item.dropdown?.some(d => pathname.startsWith(d.href)) ?? false

            // Link biasa tanpa dropdown
            if (!item.dropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2.5 rounded-lg",
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50",
                  )}
                >
                  {item.label}
                </Link>
              )
            }

            // Sub-menu dengan Ark Collapsible — accordion behavior
            return (
              <Collapsible.Root key={item.label}>
                <Collapsible.Trigger
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2.5 rounded-lg",
                    "text-sm font-medium transition-colors",
                    "data-[state=open]:bg-slate-50",
                    isActive ? "text-teal-700" : "text-slate-700 hover:bg-slate-50",
                  )}
                >
                  {item.label}
                  <NavIcon
                    name="chevron"
                    className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-180"
                  />
                </Collapsible.Trigger>

                <Collapsible.Content
                  className={cn(
                    "overflow-hidden",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                    "data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1",
                  )}
                >
                  <div className="pl-3 pt-1 pb-2 space-y-0.5">
                    {item.dropdown.map(dd => (
                      <Link
                        key={dd.href}
                        href={dd.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                      >
                        <NavIconWithBg name={dd.icon} />
                        <div>
                          <div className="font-medium text-slate-800">{dd.label}</div>
                          {dd.description && (
                            <div className="text-xs text-slate-400">{dd.description}</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            )
          })}
        </div>

        {/* CTA area bawah */}
        <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex flex-col gap-2">
          <Link
            href={NAV_CTA.href}
            onClick={onClose}
            className="w-full h-10 flex items-center justify-center rounded-xl bg-teal-700 text-white text-sm font-medium hover:bg-teal-600 transition-colors active:scale-[0.98]"
          >
            {NAV_CTA.label}
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="w-full h-10 flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-teal-700 text-teal-700 text-sm font-medium hover:bg-teal-50 transition-colors"
          >
            <NavIcon name="user" className="w-4 h-4" />
            Masuk
          </Link>
        </div>
      </div>
    </>
  )
}