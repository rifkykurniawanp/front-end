import type { EducationContent } from "../types"
import { ARTICLES_DATA } from "./articles.data"
import { BROCHURES_DATA } from "./brochures.data"
import { LAB_VALUES_DATA } from "./lab-values.data"

export const HEALTH_EDUCATION_DATA: EducationContent[] = [
  ...ARTICLES_DATA,
  ...BROCHURES_DATA,
  ...LAB_VALUES_DATA,
]

export { ARTICLES_DATA } from "./articles.data"
export { BROCHURES_DATA } from "./brochures.data"
export { LAB_VALUES_DATA } from "./lab-values.data"
