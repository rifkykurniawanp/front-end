export { HealthEducationSection } from "./components/section/HealthEducationSection"

export { FeaturedEducationSection } from "./components/featured/FeaturedEducationSection"

export type {
  EducationContent,
  EducationType,
  Audience,
  BaseEducationContent,
  ArticleContent,
  VideoContent,
  BrochureContent,
  LabContent,
  GrowthContent,
  ProfessionalContent,
} from "./types"

export { HEALTH_EDUCATION_DATA } from "./data"
export { ARTICLES_DATA }    from "./data"
export { BROCHURES_DATA }   from "./data"
export { LAB_VALUES_DATA }  from "./data"

export { filterEducation }                        from "./utils/filter.utils"
export { formatDate, formatReadTime, formatDuration } from "./utils/format.utils"
export { EDUCATION_TYPE_LABEL, AUDIENCE_LABEL }   from "./utils/constants"
