"use client"

import { Drawer } from "@ark-ui/react"
import { useState } from "react"
import { NAV_LINKS } from "./Navbar.Constants"
import { cn } from "@/lib/utils"


export const NavMobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Drawer.Trigger asChild>
        <button className="md:hidden w-9 h-9 border rounded flex items-center justify-center text-slate-700 hover:text-teal-600 transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </Drawer.Trigger>

      <Drawer.Content className="bg-white p-4 w-64 space-y-2">
        {NAV_LINKS.map((item) =>
          item.children ? (
            <div key={item.label}>
              <div className="font-medium text-slate-700">{item.label}</div>
              <div className="ml-2 mt-1 flex flex-col gap-1">
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    className="text-slate-700 hover:text-teal-600 transition-colors"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="block text-slate-700 hover:text-teal-600 transition-colors"
            >
              {item.label}
            </a>
          )
        )}
      </Drawer.Content>
    </Drawer.Root>
  )
}