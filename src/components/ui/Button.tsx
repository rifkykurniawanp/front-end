import { ark }                        from "@ark-ui/react"
import { cva, type VariantProps }     from "class-variance-authority"
import { cn }                         from "@/lib/utils"
import type { ComponentPropsWithRef } from "react"
import type { ReactNode }             from "react"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium whitespace-nowrap cursor-pointer",
    "transition-all duration-150 select-none",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-offset-2 focus-visible:ring-teal-600",
    "disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none",
    "active:scale-[0.97]",
  ],
  {
    variants: {
      variant: {
        primary       : "bg-teal-700 text-white hover:bg-teal-500 active:bg-teal-800",
        secondary     : "bg-slate-700 text-white hover:bg-slate-500 active:bg-slate-800",
        "outline-teal": "border-[1.5px] border-teal-700 text-teal-700 bg-transparent hover:bg-teal-50 active:bg-teal-100",
        "outline-slate": "border-[1.5px] border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50 hover:border-slate-400",
        "ghost-teal"  : "bg-teal-50 text-teal-700 border border-teal-100 hover:bg-teal-100",
        "ghost-slate" : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100",
        subtle        : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700",
        danger        : "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus-visible:ring-red-600",
        success       : "bg-green-700 text-white hover:bg-green-600 active:bg-green-800 focus-visible:ring-green-700",
      },
      size: {
        sm  : "text-xs  px-3.5 py-1.5 rounded-lg  h-8",
        md  : "text-sm  px-5   py-2.5 rounded-xl  h-10",
        lg  : "text-sm  px-7   py-3   rounded-xl  h-12",
        icon: "text-sm  p-2.5  rounded-xl h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size   : "md",
    },
  }
)

type ArkButtonProps = ComponentPropsWithRef<typeof ark.button>

interface ButtonProps
  extends ArkButtonProps,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  leftIcon ?: ReactNode
  rightIcon?: ReactNode
}

export const Button = ({
  variant,
  size,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) => (
  <ark.button
    disabled={disabled || isLoading}
    className={cn(buttonVariants({ variant, size }), className)}
    {...rest}
  >
    {isLoading ? (
      <span
        aria-hidden
        className="w-[1em] h-[1em] border-2 border-current border-t-transparent rounded-full animate-spin"
      />
    ) : (
      <>
        {leftIcon  && <span aria-hidden className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span aria-hidden className="shrink-0">{rightIcon}</span>}
      </>
    )}
  </ark.button>
)

export { buttonVariants }