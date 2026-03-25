import type { ReactNode } from "react"
import type { StaticImageData } from "next/image"

export interface HeroCTA {
  label: string
  href?: string
  onClick?: () => void
}

export interface HeroData {
  title: string
  subtitle: string
  description?: string

  primaryCta?: HeroCTA
  secondaryCta?: HeroCTA

  image: string | StaticImageData
  imageAlt?: string
}

export interface HeroInfoCardProps {
  title: string
  subtitle: string
  description?: string
  primaryCta?: ReactNode
  secondaryCta?: ReactNode
}

export interface HeroImageCardProps {
  image: string | StaticImageData
  alt?: string
}