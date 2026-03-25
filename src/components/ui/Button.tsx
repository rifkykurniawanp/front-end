// src/components/ui/Button.tsx

import { cn } from "@/lib/cn"
import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant =
  | "primary"        // teal solid     — aksi utama
  | "secondary"      // slate solid    — aksi penting tapi bukan CTA
  | "outline-teal"   // teal outline   — aksi sekunder bernuansa medis
  | "outline-slate"  // slate outline  — aksi sekunder netral
  | "ghost-teal"     // teal lembut    — latar terang, tidak terlalu dominan
  | "ghost-slate"    // slate lembut   — filter, opsi minor
  | "subtle"         // transparan     — aksi paling ringan
  | "danger"         // merah          — destruktif (hapus, batalkan)
  | "success"        // hijau          — konfirmasi, simpan

type ButtonSize = "sm" | "md" | "lg" | "icon"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant   ?: ButtonVariant
  size      ?: ButtonSize
  isLoading ?: boolean
  leftIcon  ?: ReactNode
  rightIcon ?: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  "primary"      : "bg-teal-700  text-white hover:bg-teal-500  active:bg-teal-800",
  "secondary"    : "bg-slate-700 text-white hover:bg-slate-500 active:bg-slate-800",
  "outline-teal" : "border border-teal-700  text-teal-700  hover:bg-teal-50",
  "outline-slate": "border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400",
  "ghost-teal"   : "bg-teal-50  text-teal-700  border border-teal-100  hover:bg-teal-100",
  "ghost-slate"  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100",
  "subtle"       : "text-slate-500 hover:bg-slate-100 hover:text-slate-700",
  "danger"       : "bg-red-600  text-white hover:bg-red-500  active:bg-red-700",
  "success"      : "bg-green-600 text-white hover:bg-green-500 active:bg-green-700",
}

const sizes: Record<ButtonSize, string> = {
  sm  : "text-xs  px-3.5 py-1.5 rounded-lg  gap-1.5",
  md  : "text-sm  px-5   py-2.5 rounded-xl  gap-2",
  lg  : "text-sm  px-7   py-3   rounded-xl  gap-2",
  icon: "text-sm  p-2.5  rounded-xl",
}

export const Button = ({
  variant   = "primary",
  size      = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) => (
  <button
    disabled={disabled || isLoading}
    className={cn(
      "inline-flex items-center justify-center font-medium",
      "transition-all duration-150 cursor-pointer",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      "active:scale-[0.97]",
      variants[variant],
      sizes[size],
      className,
    )}
    {...rest}
  >
    {isLoading ? (
      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
    ) : (
      <>
        {leftIcon}
        {children}
        {rightIcon}
      </>
    )}
  </button>
)