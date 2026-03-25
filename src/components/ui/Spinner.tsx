import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-t-transparent",
  {
    variants: {
      variant: {
        primary: "border-teal-600",
        neutral: "border-slate-400",
        white: "border-white",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type Props = VariantProps<typeof spinnerVariants> & {
  className?: string
}

export const Spinner = ({ variant, size, className }: Props) => (
  <span className={cn(spinnerVariants({ variant, size }), className)} />
)