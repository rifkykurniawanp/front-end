// src/features/health-education/components/cards/variants/VideoCard.tsx
// 🚧 Stub — aktifkan saat tipe "video" siap dipakai

import type { VideoContent } from "../../../types"
import { formatDuration } from "../../../utils/format.utils"

interface Props {
  data: VideoContent
}

export const VideoCard = ({ data }: Props) => (
  <div className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-teal-200 transition-all duration-200">
    <div className="relative bg-slate-100 h-40 flex items-center justify-center">
      {data.thumbnail ? (
        <img src={data.thumbnail} alt={data.title} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xs text-slate-400">Tidak ada thumbnail</span>
      )}
      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
        {formatDuration(data.duration)}
      </span>
    </div>
    <div className="p-4 space-y-1">
      <h3 className="font-semibold text-sm text-slate-800 line-clamp-2 group-hover:text-teal-700 transition-colors">
        {data.title}
      </h3>
      {data.description && (
        <p className="text-xs text-slate-500 line-clamp-2">{data.description}</p>
      )}
    </div>
  </div>
)
