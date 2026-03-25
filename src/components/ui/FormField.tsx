import { ark } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FormFieldProps {
  label?: string
  error?: string
  children: ReactNode
}

export const FormField = ({ label, error, children }: FormFieldProps) => (
  <ark.div className="flex flex-col gap-1.5 w-full">
    
    {label && (
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>
    )}

    {children}

    {error && (
      <span className="text-xs text-red-600">{error}</span>
    )}
  </ark.div>
)