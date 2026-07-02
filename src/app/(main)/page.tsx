import { HeroSection } from "@/src/features/hero"
import { Navbar } from "@/src/components/layout/navbar/Navbar"
import { HighlightSection } from "@/src/features/highlight"
import { ClinicCarousel } from "@/src/features/clinic-info"
import { FacilitiesSection } from "@/src/features/facilities"
import { FeaturedEducationSection } from "@/src/features/health-education"
import { Footer } from "@/src/components/layout/footer/Footer"
import { HEALTH_EDUCATION_DATA } from "@/src/features/health-education"
// import { QueueSection } from "@/src/features/queue-registration"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
    
      <HeroSection />

      <HighlightSection />

      <ClinicCarousel />

      <FacilitiesSection />

       <FeaturedEducationSection data={HEALTH_EDUCATION_DATA} />

      {/* <QueueSection /> */}

      <Footer />
    </main>
  )
}