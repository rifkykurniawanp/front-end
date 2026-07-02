import type { ArticleContent } from "../../../types"
import { formatDate, formatReadTime } from "../../../utils/format.utils"

interface Props {
  data: ArticleContent
}

export const ArticleCard = ({ data }: Props) => (
  <div className="group rounded-xl border border-slate-200 p-4 space-y-3 hover:shadow-md hover:border-teal-200 transition-all duration-200">
    {data.thumbnail && (
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full h-36 object-cover rounded-lg"
      />
    )}
    <div className="space-y-1">
      <h3 className="font-semibold text-sm text-slate-800 line-clamp-2 group-hover:text-teal-700 transition-colors">
        {data.title}
      </h3>
      {data.description && (
        <p className="text-xs text-slate-500 line-clamp-2">{data.description}</p>
      )}
    </div>
    <div className="flex justify-between text-xs text-slate-400">
      <span>{data.author}</span>
      <span>{formatReadTime(data.readTime)} · {formatDate(data.createdAt)}</span>
    </div>
  </div>
)
