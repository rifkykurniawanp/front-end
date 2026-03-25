import { ark } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TabsProps {
  tabs: { label: string; value: string }[]
  value: string
  onChange: (val: string) => void
}

export const Tabs = ({ tabs, value, onChange }: TabsProps) => (
  <div className="flex gap-2 border-b border-slate-200">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        onClick={() => onChange(tab.value)}
        className={cn(
          "px-4 py-2 text-sm font-medium border-b-2 transition",
          value === tab.value
            ? "border-teal-600 text-teal-600"
            : "border-transparent text-slate-500 hover:text-slate-700"
        )}
      >
        {tab.label}
      </button>
    ))}
  </div>
)