import { ark } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Props {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export const Modal = ({ open, onClose, title, children }: Props) => {
  if (!open) return null

  return (
    <ark.div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className={cn(
        "relative bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl"
      )}>
        {title && (
          <h2 className="text-lg font-semibold mb-4 text-slate-900">
            {title}
          </h2>
        )}

        {children}
      </div>
    </ark.div>
  )
}