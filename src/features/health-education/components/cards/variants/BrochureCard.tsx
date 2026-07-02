import type { BrochureContent } from "../../../types"

interface Props {
  data: BrochureContent
}

export const BrochureCard = ({ data }: Props) => (
  <div className="rounded-xl border border-slate-200 p-4 space-y-3 hover:shadow-md hover:border-teal-200 transition-all duration-200">
    <div className="h-32 bg-slate-50 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      {data.fileSize && <span className="text-xs">{data.fileSize}</span>}
    </div>
    <div className="space-y-1">
      <h3 className="font-semibold text-sm text-slate-800">{data.title}</h3>
      {data.description && (
        <p className="text-xs text-slate-500 line-clamp-2">{data.description}</p>
      )}
    </div>
    <a
      href={data.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-medium text-teal-700 hover:text-teal-800 transition-colors"
    >
      Download PDF →
    </a>
  </div>
)
