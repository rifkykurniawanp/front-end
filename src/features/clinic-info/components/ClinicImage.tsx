// ClinicImage.tsx

import Image from "next/image"

export const ClinicImage = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden">
      <Image
        src={src}
        alt="Clinic"
        fill
        className="object-cover transition-all duration-700 ease-in-out"
      />
    </div>
  )
}