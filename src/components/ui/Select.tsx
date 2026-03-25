import { ark } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithRef } from "react"

const selectVariants = cva(
  "w-full rounded-xl text-sm outline-none transition",
  {
    variants: {
      variant: {
        default:
          "border border-slate-300 bg-white focus:ring-2 focus:ring-teal-600",
        error:
          "border border-red-500 bg-white focus:ring-2 focus:ring-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type Props = ComponentPropsWithRef<typeof ark.select> &
  VariantProps<typeof selectVariants>

export const Select = ({ variant, className, ...props }: Props) => (
  <ark.select
    className={cn(selectVariants({ variant }), className)}
    {...props}
  />
)