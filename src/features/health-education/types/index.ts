export type { EducationType, Audience, BaseEducationContent } from "./base"

export type {
  ArticleContent,
  VideoContent,
  BrochureContent,
  LabContent,
  GrowthContent,
  ProfessionalContent,
} from "./variants"

import type { ArticleContent, VideoContent, BrochureContent, LabContent, GrowthContent, ProfessionalContent } from "./variants"

export type EducationContent =
  | ArticleContent
  | VideoContent
  | BrochureContent
  | LabContent
  | GrowthContent
  | ProfessionalContent
