// src/components/layout/NavDropdown.tsx
// Dropdown nav dengan Ark UI Menu sebagai basis
// Ark Menu memberi: keyboard navigation, focus trap, aria-expanded otomatis

"use client"

import Link                  from "next/link"
import { Menu }              from "@ark-ui/react"
import { cn }                from "@/lib/utils"
import { NavIcon, NavIconWithBg } from "./NavIcon"
import type { NavItem }      from "./Navbar.Constants"

interface NavDropdownProps {
  item      : NavItem
  isActive ?: boolean
}

export const NavDropdown = ({ item, isActive }: NavDropdownProps) => {
  if (!item.dropdown) return null

  return (
    <Menu.Root>
      {/* Trigger — tombol yang membuka dropdown */}
      <Menu.Trigger
  className={cn(
    "flex items-center gap-1.5 px-4 py-2.5 rounded-xl",
    "text-[15px] font-medium transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
    "data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900",

    isActive
      ? "text-teal-700"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  )}
>
        {item.label}
        {/* Chevron — rotate otomatis via data-state dari Ark */}
        <NavIcon
          name="chevron"
          className="w-3.5 h-3.5 transition-transform duration-200 data-[state=open]:rotate-180"
        />
      </Menu.Trigger>

      {/* Positioner — agar dropdown muncul di bawah trigger */}
      <Menu.Positioner>
        <Menu.Content
          className={cn(
            "z-50 min-w-[220px] rounded-xl p-2",
            "bg-white border border-slate-200",
            "shadow-lg shadow-slate-200/60",
            // Animasi masuk — Ark otomatis set data-state
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            "data-[state=open]:slide-in-from-top-2",
          )}
        >
          {item.dropdown.map(dd => (
            <Menu.Item key={dd.href} value={dd.label}>
              <Link
                href={dd.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:bg-slate-50"
              >
                <NavIconWithBg name={dd.icon} />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800">{dd.label}</span>
                  {dd.description && (
                    <span className="text-xs text-slate-400 mt-0.5">{dd.description}</span>
                  )}
                </div>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}