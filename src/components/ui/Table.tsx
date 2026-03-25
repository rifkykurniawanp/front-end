import { ark } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TableProps {
  headers: string[]
  children: ReactNode
}

export const Table = ({ headers, children }: TableProps) => (
  <div className="w-full overflow-auto border border-slate-200 rounded-xl">
    <table className="w-full text-sm">
      <thead className="bg-slate-50 text-slate-600">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 text-left font-medium">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y">{children}</tbody>
    </table>
  </div>
)

export const TableRow = ({ children }: { children: ReactNode }) => (
  <tr className="hover:bg-slate-50">{children}</tr>
)

export const TableCell = ({ children }: { children: ReactNode }) => (
  <td className="px-4 py-3">{children}</td>
)