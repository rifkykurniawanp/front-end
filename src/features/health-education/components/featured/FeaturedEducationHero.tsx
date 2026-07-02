// src/features/health-education/components/featured/FeaturedEducationHero.tsx

import type { ArticleContent } from "../../types"
import { formatDate, formatReadTime } from "../../utils/format.utils"
import Link from "next/link"

interface Props {
  data: ArticleContent
}

export const FeaturedEducationHero = ({ data }: Props) => (
  <Link
    href={`/education/${data.id}`}
    className="group relative flex flex-col justify-end overflow-hidden rounded-2xl min-h-[360px] bg-slate-900"
  >
    {/* Background image */}
    {data.thumbnail && (
      <img
        src={data.thumbnail}
        alt={data.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
      />
    )}

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

    {/* Content */}
    <div className="relative z-10 p-6 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
          Artikel Utama
        </span>
      </div>

      <h2 className="text-xl font-semibold text-white leading-snug line-clamp-3 group-hover:text-teal-100 transition-colors">
        {data.title}
      </h2>

      {data.description && (
        <p className="text-sm text-slate-300 line-clamp-2">
          {data.description}
        </p>
      )}

      <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
        <span>{data.author}</span>
        <span>·</span>
        <span>{formatReadTime(data.readTime)}</span>
        <span>·</span>
        <span>{formatDate(data.createdAt)}</span>
      </div>
    </div>
  </Link>
)
