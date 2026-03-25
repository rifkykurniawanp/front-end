import { ark } from "@ark-ui/react"
import { HeroInfoCard } from "./HeroInfoCard"
import { HeroImageCard } from "./HeroImageCard"
import { heroData } from "../data/hero.data"
import { Button } from "@/src/components/ui"

export const HeroSection = () => {
  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    image,
  } = heroData

  return (
    <ark.section className="w-full py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <HeroInfoCard
          title={title}
          subtitle={subtitle}
          description={description}
          primaryCta={
            primaryCta ? (
              <Button variant="primary" size="lg">
                {primaryCta.label}
              </Button>
            ) : null
          }
          secondaryCta={
            secondaryCta ? (
              <Button variant="outline-teal" size="lg">
                {secondaryCta.label}
              </Button>
            ) : null
          }
        />

        {image && <HeroImageCard image={image} />}
      </div>
    </ark.section>
  )
}