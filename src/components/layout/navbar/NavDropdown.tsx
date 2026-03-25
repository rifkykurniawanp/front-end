"use client"

import { Menu } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface NavDropdownProps {
  label: string
  children: { label: string; href: string }[]
}

export const NavDropdown = ({ label, children }: NavDropdownProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <button
          className={cn(
            "flex items-center gap-1 px-3 py-2 text-slate-700 font-medium rounded-md hover:text-teal-600 transition-colors duration-200"
          )}
        >
          {label}
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </Menu.Trigger>

      <Menu.Content
        className={cn(
          "bg-white shadow-lg rounded-md p-2 mt-1 min-w-[200px] transition-opacity duration-200"
        )}
      >
        {children.map((item) => (
          <Menu.Item key={item.label} value={item.label} asChild>
            <a
              href={item.href}
              className="block px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-md transition-colors duration-200"
            >
              {item.label}
            </a>
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}