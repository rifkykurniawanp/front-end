import { HeroSection } from "@/src/features/hero"
import { Navbar } from "@/src/components/layout/navbar/Navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
    
      <HeroSection />

    </main>
  )
}