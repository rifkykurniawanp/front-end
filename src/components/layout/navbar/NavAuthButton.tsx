"use client"
import { useState } from "react"

export const NavAuthButton = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return isLoggedIn ? (
    <button
      onClick={() => setLoggedIn(false)}
      className="avatar-btn flex items-center gap-2 px-3 py-1 border rounded-full border-slate-300 hover:bg-slate-100"
    >
      <div className="avatar-ring w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center text-xs text-white">
        RK
      </div>
      dr. Rifky
      <svg className="w-3 h-3" viewBox="0 0 24 24">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  ) : (
    <button
      onClick={() => setLoggedIn(true)}
      className="btn-login px-3 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 flex items-center gap-1"
    >
      Masuk
    </button>
  )
}