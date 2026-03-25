import { ark } from "@ark-ui/react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"

const cardVariants = cva(
  "rounded-2xl transition-all border",
  {
    variants: {
      variant: {
        default: "bg-white border-slate-200 shadow-sm",
        elevated: "bg-white border-transparent shadow-md hover:shadow-lg",
        outline: "bg-white border-slate-300",
        subtle: "bg-slate-50 border-transparent",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
)

type Props = ComponentPropsWithRef<typeof ark.div> &
  VariantProps<typeof cardVariants> & {
    children: ReactNode
  }

export const Card = ({ variant, padding, className, ...props }: Props) => (
  <ark.div className={cn(cardVariants({ variant, padding }), className)} {...props} />
)