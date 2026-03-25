import { ark } from "@ark-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithRef } from "react"

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5",
  {
    variants: {
      variant: {
        neutral: "bg-slate-100 text-slate-700",
        success: "bg-green-100 text-green-700",
        danger: "bg-red-100 text-red-700",
        warning: "bg-yellow-100 text-yellow-700",
        primary: "bg-teal-100 text-teal-700",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

type Props = ComponentPropsWithRef<typeof ark.span> &
  VariantProps<typeof badgeVariants>

export const Badge = ({ variant, className, ...props }: Props) => (
  <ark.span className={cn(badgeVariants({ variant }), className)} {...props} />
)