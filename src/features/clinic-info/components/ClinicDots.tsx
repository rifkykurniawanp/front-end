interface Props {
  total: number
  activeIndex: number
  onChange: (i: number) => void
}

export const ClinicDots = ({ total, activeIndex, onChange }: Props) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`
            h-2 rounded-full transition-all duration-300
            ${i === activeIndex
              ? "w-6 bg-teal-700"
              : "w-2 bg-slate-300"}
          `}
        />
      ))}
    </div>
  )
}