import Link from "next/link"
import { ark } from "@ark-ui/react"
import { cn } from "@/lib/utils"
import {
  FOOTER_CLINIC,
  FOOTER_LOCATIONS,
  FOOTER_NAV_GROUPS,
  FOOTER_SOCIALS,
} from "./footer.constant"
import { FooterSocialIcon } from "./FooterSocialIcon"

// small component
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm font-semibold text-slate-100 mb-4 tracking-wide">
    {children}
  </h3>
)

export const Footer = () => (
  <ark.footer className="bg-slate-900 text-slate-400">

    {/* MAIN */}
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* ── Brand + Contact */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-[10px] bg-teal-700 flex items-center justify-center">
              {/* icon */}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Praktik
              </p>
              <p className="text-[10px] text-teal-400">
                dr. Rifky Kurniawan
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-400 max-w-xs">
            {FOOTER_CLINIC.tagline}
          </p>

          <div className="mt-4 text-xs text-slate-500 space-y-1">
            <p>📞 {FOOTER_CLINIC.phone}</p>
            <p>💬 WhatsApp tersedia</p>
          </div>

          {/* Social */}
          <div className="flex gap-2 mt-6">
            {FOOTER_SOCIALS.map(s => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center",
                  "bg-slate-800 text-slate-400",
                  "hover:bg-teal-600/80 hover:text-white transition"
                )}
              >
                <FooterSocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Navigasi grouped */}
        <div className="grid grid-cols-2 gap-8">
          {FOOTER_NAV_GROUPS.map(group => (
            <div key={group.title}>
              <FooterHeading>{group.title}</FooterHeading>
              <ul className="space-y-2">
                {group.items.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-teal-400 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Lokasi + Jam */}
        <div>
          <FooterHeading>Lokasi & Jam Praktik</FooterHeading>

          <ul className="space-y-4">
            {FOOTER_LOCATIONS.map((loc, i) => (
              <li key={i}>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  className="group block"
                >
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-teal-400">
                    {loc.name}
                    {loc.isPrimary && (
                      <span className="ml-2 text-[10px] text-teal-500">
                        UTAMA
                      </span>
                    )}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {loc.address}
                  </p>

                  <p className="text-xs text-teal-600 mt-1">
                    {loc.hours}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>

    {/* ── Bottom */}
    <div className="border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">

        <p className="text-xs text-slate-600">
          {FOOTER_CLINIC.copy}
        </p>

        <p className="text-xs text-slate-700">
          Dibuat dengan <span className="text-teal-600">♥</span>
        </p>

      </div>
    </div>

  </ark.footer>
)