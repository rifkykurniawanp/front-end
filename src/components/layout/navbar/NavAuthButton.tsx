"use client"

import Link              from "next/link"
import { useState }      from "react"
import { Avatar }        from "@ark-ui/react"
import { Menu }          from "@ark-ui/react"
import { cn }            from "@/lib/utils"
import { NavIcon }       from "./NavIcon"

// Simulasi user — nanti diganti dengan useSession() dari next-auth
// atau useUser() dari Clerk
interface User {
  name  : string
  initials: string
  image?: string
}

const MOCK_USER: User = {
  name    : "dr. Rifky",
  initials: "RK",
}

export const NavAuthButton = () => {
  // TODO: ganti dengan session dari auth library
  // const { data: session } = useSession()   ← next-auth
  // const { user } = useUser()               ← clerk
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = isLoggedIn ? MOCK_USER : null

  // ── Guest — belum login ────────────────────────────────────────────────
  if (!user) {
    return (
      <Link
        href="/login"
        className={cn(
          "flex items-center gap-2 h-9 px-4",
          "rounded-xl border-[1.5px] border-teal-700 text-teal-700",
          "text-sm font-medium bg-transparent",
          "hover:bg-teal-50 transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
          "active:scale-[0.97]",
        )}
        // DEV ONLY: toggle login state untuk preview
        onClick={e => { e.preventDefault(); setIsLoggedIn(true) }}
      >
        <NavIcon name="user" className="w-4 h-4" />
        Masuk
      </Link>
    )
  }

  // ── Logged in — avatar + nama + dropdown ───────────────────────────────
  return (
    <Menu.Root>
      <Menu.Trigger
        className={cn(
          "flex items-center gap-2 h-9 px-2 pr-3",
          "rounded-full border border-slate-200",
          "text-sm font-medium text-slate-800",
          "hover:bg-slate-50 transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
          "active:scale-[0.97]",
        )}
      >
        {/* Avatar — Ark UI Avatar dengan fallback inisial */}
        <Avatar.Root className="w-7 h-7 rounded-full overflow-hidden shrink-0">
          <Avatar.Image
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback
            className="w-full h-full bg-teal-700 flex items-center justify-center text-white text-xs font-bold"
          >
            {user.initials}
          </Avatar.Fallback>
        </Avatar.Root>

        <span className="max-w-[100px] truncate">{user.name}</span>
        <NavIcon name="chevron" className="w-3 h-3 text-slate-400" />
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content
          className={cn(
            "z-50 min-w-[180px] rounded-xl p-1.5",
            "bg-white border border-slate-200 shadow-lg shadow-slate-200/60",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            "data-[state=open]:slide-in-from-top-2",
          )}
        >
          {/* Info user di atas */}
          <div className="px-3 py-2 mb-1 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-800">{user.name}</p>
            <p className="text-xs text-slate-400 mt-0.5">Pasien Terdaftar</p>
          </div>

          <Menu.Item value="profile" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer">
            Profil Saya
          </Menu.Item>
          <Menu.Item value="history" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer">
            Riwayat Kunjungan
          </Menu.Item>

          <div className="h-px bg-slate-100 my-1" />

          {/* Logout */}
          <Menu.Item
            value="logout"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 cursor-pointer"
            onClick={() => setIsLoggedIn(false)}
          >
            Keluar
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}