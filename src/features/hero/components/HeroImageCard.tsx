import { ark } from "@ark-ui/react"
import Image from "next/image"
import type { HeroImageCardProps } from "../types"
import { Card } from "@/src/components/ui"

export const HeroImageCard = ({
  image,
  alt = "Healthcare Illustration",
}: HeroImageCardProps) => {
  return (
    <Card
      variant="elevated"
      padding="none"
      className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden"
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        priority
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/30 to-transparent" />
    </Card>
  )
}