// src/features/health-education/components/cards/EducationCard.tsx
//
// Dispatcher — tidak perlu diubah saat menambah tipe baru.
// Cukup tambah case baru dan buat file variant baru di ./variants/

import type { EducationContent } from "../../types"
import { ArticleCard }      from "./variants/ArticleCard"
import { VideoCard }        from "./variants/VideoCard"
import { BrochureCard }     from "./variants/BrochureCard"
import { LabCard }          from "./variants/LabCard"
import { GrowthCard }       from "./variants/GrowthCard"
import { ProfessionalCard } from "./variants/ProfessionalCard"

interface Props {
  data: EducationContent
}

export const EducationCard = ({ data }: Props) => {
  switch (data.type) {
    case "article":      return <ArticleCard data={data} />
    case "video":        return <VideoCard data={data} />
    case "brochure":     return <BrochureCard data={data} />
    case "lab":          return <LabCard data={data} />
    case "growth":       return <GrowthCard data={data} />
    case "professional": return <ProfessionalCard data={data} />
    default:             return null
  }
}
