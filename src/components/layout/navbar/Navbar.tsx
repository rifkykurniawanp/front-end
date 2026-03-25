"use client"

import { useState } from "react"
import { ark } from "@ark-ui/react"
import { NavLinks } from "./NavLinks"
import { NavDropdown } from "./NavDropdown"
import { NavMobileMenu } from "./NavMobileMenu"
import { NavAuthButton } from "./NavAuthButton"
import { NAV_LINKS } from "./Navbar.Constants"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  return (
    <ark.nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.svg" alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label} children={item.children} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 font-medium text-slate-700 hover:text-teal-600 rounded-md transition-colors duration-200"
                )}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Auth & Mobile */}
        <div className="flex items-center gap-2">
          <NavAuthButton />
          <NavMobileMenu />
        </div>
      </div>
    </ark.nav>
  )
}