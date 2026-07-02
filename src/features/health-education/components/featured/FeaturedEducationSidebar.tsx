// src/features/health-education/components/featured/FeaturedEducationSidebar.tsx

import type { EducationContent } from "../../types"
import { formatDate } from "../../utils/format.utils"
import { EDUCATION_TYPE_LABEL } from "../../utils/constants"
import Link from "next/link"

interface Props {
  data: EducationContent[]
}

export const FeaturedEducationSidebar = ({ data }: Props) => (
  <div className="flex flex-col gap-4">
    {data.map((item) => (
      <Link
        key={item.id}
        href={`/education/${item.id}`}
        className="group flex gap-4 items-start p-4 rounded-xl border border-slate-200 hover:border-teal-200 hover:shadow-sm transition-all duration-200"
      >
        {/* Thumbnail atau placeholder */}
        <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-slate-100">
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs text-slate-400 text-center px-1">
                {EDUCATION_TYPE_LABEL[item.type]}
              </span>
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-xs text-teal-700 font-medium">
            {EDUCATION_TYPE_LABEL[item.type]}
          </span>
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 group-hover:text-teal-700 transition-colors">
            {item.title}
          </h3>
          <span className="text-xs text-slate-400 mt-auto">
            {formatDate(item.createdAt)}
          </span>
        </div>
      </Link>
    ))}
  </div>
)
