import { Card }   from "@/src/components/ui"
import type { HeroInfoCardProps } from "../types"

export const HeroInfoCard = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: HeroInfoCardProps) => (
  <Card variant="subtle" padding="lg" className="flex flex-col gap-6">

    {/* Subtitle — label kecil di atas judul */}
    <span className="text-sm text-teal-600 font-medium tracking-wide">
      {subtitle}
    </span>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
      {title}
    </h1>

    {/* Description — opsional */}
    {description && (
      <p className="text-slate-600 text-base leading-relaxed max-w-md">
        {description}
      </p>
    )}

    {/* CTA — diterima sebagai ReactNode dari HeroSection */}
    {(primaryCta || secondaryCta) && (
      <div className="flex flex-wrap items-center gap-3 mt-2">
        {primaryCta}
        {secondaryCta}
      </div>
    )}
  </Card>
)