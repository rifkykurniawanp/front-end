"use client"

import { useState, useEffect, useCallback } from "react"
import type {
  EducationContent,
  ArticleContent,
  BrochureContent,
  LabContent,
} from "../../types"
import Link from "next/link"
import { formatDate, formatReadTime } from "../../utils/format.utils"

interface Props {
  data: EducationContent[]
}

const AUTO_ROTATE_MS = 3500

// ─── Dot indicators ───────────────────────────────────────────
const Dots = ({
  total,
  active,
  onSelect,
}: {
  total: number
  active: number
  onSelect: (i: number) => void
}) => (
  <div className="flex gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`rounded-full transition-all duration-300 ${
          i === active
            ? "w-4 h-1.5 bg-teal-500"
            : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"
        }`}
      />
    ))}
  </div>
)

// ─── Article category card ────────────────────────────────────
const ArticleCategoryCard = ({ items }: { items: ArticleContent[] }) => {
  const [active, setActive] = useState(0)

  const next = useCallback(
    () => setActive((p) => (p + 1) % items.length),
    [items.length]
  )

  useEffect(() => {
    const t = setInterval(next, AUTO_ROTATE_MS)
    return () => clearInterval(t)
  }, [next])

  const item = items[active]

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      {/* Preview */}
      <Link href={`/education/${item.id}`} className="relative block h-44 bg-slate-100 overflow-hidden">
        {item.thumbnail ? (
          <img
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-50 to-slate-200" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Category label */}
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur-sm">
          Artikel
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <Link href={`/education/${item.id}`} className="flex-1">
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug hover:text-teal-700 transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs text-slate-400 line-clamp-2 mt-1">
              {item.description}
            </p>
          )}
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            {formatReadTime(item.readTime)} · {formatDate(item.createdAt)}
          </p>
          <Dots total={items.length} active={active} onSelect={setActive} />
        </div>
        <Link
          href="/education?type=article"
          className="text-[11px] font-medium text-teal-600 hover:text-teal-700 transition-colors"
        >
          Lihat semua artikel →
        </Link>
      </div>
    </div>
  )
}

// ─── Brochure category card ───────────────────────────────────
const BrochureCategoryCard = ({ items }: { items: BrochureContent[] }) => {
  const [active, setActive] = useState(0)

  const next = useCallback(
    () => setActive((p) => (p + 1) % items.length),
    [items.length]
  )

  useEffect(() => {
    const t = setInterval(next, AUTO_ROTATE_MS + 500)
    return () => clearInterval(t)
  }, [next])

  const item = items[active]

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      {/* Preview */}
      <Link
        href={item.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-44 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden"
      >
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/20 text-slate-700 backdrop-blur-sm">
          Brosur
        </span>
        {/* PDF illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-1.5 w-24 opacity-20">
            {[100, 75, 90, 60, 80].map((w, i) => (
              <div key={i} className="h-2 rounded-full bg-red-400" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
        <svg className="absolute bottom-4 right-4 w-12 h-12 text-red-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <path fill="white" fillOpacity=".5" d="M14 2v6h6" />
        </svg>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <Link
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug hover:text-teal-700 transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs text-slate-400 line-clamp-2 mt-1">
              {item.description}
            </p>
          )}
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-slate-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {item.fileSize ?? "Download PDF"}
          </p>
          <Dots total={items.length} active={active} onSelect={setActive} />
        </div>
        <Link
          href="/education?type=brochure"
          className="text-[11px] font-medium text-teal-600 hover:text-teal-700 transition-colors"
        >
          Lihat semua brosur →
        </Link>
      </div>
    </div>
  )
}

// ─── Lab category card ────────────────────────────────────────
const LabCategoryCard = ({ items }: { items: LabContent[] }) => {
  const [active, setActive] = useState(0)

  const next = useCallback(
    () => setActive((p) => (p + 1) % items.length),
    [items.length]
  )

  useEffect(() => {
    const t = setInterval(next, AUTO_ROTATE_MS + 1000)
    return () => clearInterval(t)
  }, [next])

  const item = items[active]

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      {/* Preview */}
      <div className="relative h-44 bg-gradient-to-br from-teal-50 to-cyan-50 flex flex-col items-center justify-center gap-2 overflow-hidden">
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 text-teal-600">
          Nilai Lab
        </span>
        <p className="text-[11px] text-teal-400 font-medium uppercase tracking-widest">
          Nilai Normal
        </p>
        <p
          key={item.id}
          className="text-2xl font-bold text-teal-700 text-center px-4 leading-tight"
        >
          {item.normalRange}
        </p>
        {item.unit && (
          <p className="text-xs text-teal-400">{item.unit}</p>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs text-slate-400 line-clamp-2 mt-1">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-slate-400">{formatDate(item.createdAt)}</p>
          <Dots total={items.length} active={active} onSelect={setActive} />
        </div>
        <Link
          href="/education?type=lab"
          className="text-[11px] font-medium text-teal-600 hover:text-teal-700 transition-colors"
        >
          Lihat semua nilai lab →
        </Link>
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────
export const FeaturedEducationSection = ({ data }: Props) => {
  const articles  = data.filter((d): d is ArticleContent  => d.type === "article")
  const brochures = data.filter((d): d is BrochureContent => d.type === "brochure")
  const labValues = data.filter((d): d is LabContent      => d.type === "lab")

  // Hanya tampilkan kalau minimal 1 kategori punya data
  const hasContent = articles.length > 0 || brochures.length > 0 || labValues.length > 0
  if (!hasContent) return null

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest">
              Edukasi Kesehatan
            </p>
            <h2 className="text-2xl font-semibold text-slate-800">
              Informasi untuk Anda
            </h2>
          </div>
          <Link
            href="/education"
            className="text-sm text-slate-400 hover:text-teal-700 transition-colors"
          >
            Lihat Semua →
          </Link>
        </div>

        {/* 3-column grid — hanya tampil kategori yang punya data */}
        <div className={`grid gap-5 ${
          [articles, brochures, labValues].filter((g) => g.length > 0).length === 3
            ? "md:grid-cols-3"
            : [articles, brochures, labValues].filter((g) => g.length > 0).length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-1 max-w-sm"
        }`}>
          {articles.length > 0  && <ArticleCategoryCard  items={articles} />}
          {brochures.length > 0 && <BrochureCategoryCard items={brochures} />}
          {labValues.length > 0 && <LabCategoryCard      items={labValues} />}
        </div>

      </div>
    </section>
  )
}