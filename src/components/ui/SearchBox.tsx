import { ark } from "@ark-ui/react"
import { Input } from "./Input"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithRef } from "react"

interface Props extends ComponentPropsWithRef<typeof ark.div> {
  onSearch?: (value: string) => void
}

export const SearchBox = ({ className, onSearch }: Props) => {
  return (
    <ark.div className={cn("relative w-full", className)}>
      <Input
        placeholder="Search..."
        className="pl-10"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        🔍
      </span>
    </ark.div>
  )
}