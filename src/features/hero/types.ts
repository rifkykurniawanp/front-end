export interface HeroStat {
  value : string
  label : string
  tooltip?: string 
}

export interface HeroCta {
  primary   : string
  secondary : string
}

export interface HeroImage {
  src         : string
  alt         : string
  fallback    : string 
}

export interface HeroData {
  badge       : string
  headline    : string[]
  subheadline : string
  description : string
  stats       : HeroStat[]
  cta         : HeroCta
  image       : HeroImage
  doctor      : {
    name           : string
    specialization : string
  }
}

export interface HeroBadgeProps {
  text: string
}

export interface HeroStatItemProps {
  value   : string
  label   : string
  tooltip?: string
}

export interface HeroImageProps {
  src      : string
  alt      : string
  fallback : string
  name     : string
  specialty: string
}

export interface HeroContentProps {
  badge          : string
  headline       : string[]
  subheadline    : string
  description    : string
  stats          : HeroStat[]
  cta            : HeroCta
  onCtaPrimary   : () => void
  onCtaSecondary : () => void
}