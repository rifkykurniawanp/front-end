// src/components/layout/NavLinks.tsx
// Render semua link navigasi desktop
// DRY: map NAV_ITEMS → link biasa atau dropdown

"use client"

import Link              from "next/link"
import { usePathname }   from "next/navigation"
import { cn }            from "@/lib/utils"
import { NavDropdown }   from "./NavDropdown"
import { NAV_ITEMS }     from "./Navbar.Constants"

export const NavLinks = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-2">
  {NAV_ITEMS.map(item => {
    const isActive = item.href
      ? pathname === item.href
      : item.dropdown?.some(d => pathname.startsWith(d.href)) ?? false

    if (item.dropdown) {
      return (
        <NavDropdown key={item.label} item={item} isActive={isActive} />
      )
    }

    return (
      <Link
        key={item.label}
        href={item.href!}
        className={cn(
          // 🔥 INI KUNCI NYA
          "relative px-4 py-2.5 rounded-xl text-[15px] font-medium",
          "transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",

          isActive
            ? "text-teal-700"
            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        )}
      >
        {item.label}

        {isActive && (
          <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-teal-600" />
        )}
      </Link>
    )
  })}
</nav>
  )
}