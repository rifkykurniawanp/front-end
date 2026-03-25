import { ark } from "@ark-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithRef } from "react"

const inputVariants = cva(
  "w-full rounded-xl text-sm outline-none transition",
  {
    variants: {
      variant: {
        default:
          "border border-slate-300 bg-white focus:ring-2 focus:ring-teal-600",
        error:
          "border border-red-500 bg-white focus:ring-2 focus:ring-red-500",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

type Props = ComponentPropsWithRef<typeof ark.input> &
  VariantProps<typeof inputVariants>

export const Input = ({ variant, size, className, ...props }: Props) => (
  <ark.input
    className={cn(inputVariants({ variant, size }), className)}
    {...props}
  />
)