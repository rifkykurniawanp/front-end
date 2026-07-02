"use client"

import type { ReactElement } from "react"
import type { FooterSocial } from "./footer.constant"
import { cn } from "@/lib/utils"

type IconName = FooterSocial["icon"]

interface IconProps {
  className?: string
}

const ICONS: Record<IconName, (props: IconProps) => ReactElement> = {
  instagram: ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full", className)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  ),

  facebook: ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full", className)} fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),

  youtube: ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full", className)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon fill="white" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  ),

  whatsapp: ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full", className)} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
  ),

  tiktok: ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full", className)} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  ),
}

interface FooterSocialIconProps {
  name: IconName
  className?: string
}

export const FooterSocialIcon = ({ name, className }: FooterSocialIconProps) => {
  const Icon = ICONS[name]

  if (!Icon) return null // safety guard

  return (
    <span className="w-5 h-5 flex items-center justify-center">
      <Icon className={className} />
    </span>
  )
}