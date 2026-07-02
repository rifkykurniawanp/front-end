export type IconName =
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "tiktok"

// ── Brand ────────────────────────────────────────────────────

export interface FooterClinic {
  name    : string
  tagline : string
  phone   : string
  whatsapp: string
  copy    : string
}

export const FOOTER_CLINIC: FooterClinic = {
  name    : "Praktik Mandiri dr. Rifky Kurniawan",
  tagline : "Menjaga Kesehatan Anda adalah Prioritas Kami",
  phone   : "08xxxxxxxxxx",
  whatsapp: "https://wa.me/628xxx",
  copy    : `© ${new Date().getFullYear()} dr. Rifky Kurniawan. Hak cipta dilindungi.`,
}

// ── Navigasi ─────────────────────────────────────────────────

export interface FooterNavItem {
  label: string
  href : string
}

export interface FooterNavGroup {
  title: string
  items: FooterNavItem[]
}

export const FOOTER_NAV_GROUPS: FooterNavGroup[] = [
  {
    title: "Menu",
    items: [
      { label: "Beranda",        href: "/" },
      { label: "Tentang",        href: "/about" },
      { label: "Daftar Antrian", href: "/antrian" },
    ],
  },
  {
    title: "Edukasi",
    items: [
      { label: "Artikel", href: "/education/articles" },
      { label: "Video",   href: "/education/videos" },
      { label: "Brosur",  href: "/education/brochures" },
    ],
  },
]

export interface FooterLocation {
  name     : string
  address  : string
  mapsUrl  : string
  hours    : string
  isPrimary?: boolean

  // future-proof
  lat?: number
  lng?: number
}

export const FOOTER_LOCATIONS: FooterLocation[] = [
  {
    name     : "Tempat Praktik Dokter Rifky Kurniawan 1",
    address  : "Jl. Abiyasa no. 3A RT 06 RW 06, TAMAN , PEMALANG",
    mapsUrl  : "https://maps.google.com/?q=Jl.+Kesehatan+No.+12+Semarang",
    hours    : "Sabtu - Minggu, 13.00 - 16.00",
    isPrimary: true,
  },
  {
    name    : "Tempat Praktik Dokter Rifky Kurniawan 2",
    address : "Jl. Medika Raya No. 5, Semarang",
    mapsUrl : "https://maps.google.com/?q=Jl.+Medika+Raya+No.+5+Semarang",
    hours   : "Sabtu, 09.00 - 12.00",
  },
  {
    name    : "Tempat Praktik Dokter Rifky Kurniawan 3",
    address : "Jl. Medika Raya No. 5, Semarang",
    mapsUrl : "https://maps.google.com/?q=Jl.+Medika+Raya+No.+5+Semarang",
    hours   : "Sabtu, 09.00 - 12.00",
  },
]

// ── Social ───────────────────────────────────────────────────

export interface FooterSocial {
  label: string
  href : string
  icon : IconName
}

export const FOOTER_SOCIALS: FooterSocial[] = [
  {
    label: "Instagram",
    href : "https://instagram.com",
    icon : "instagram",
  },
  {
    label: "Facebook",
    href : "https://facebook.com",
    icon : "facebook",
  },
  {
    label: "YouTube",
    href : "https://youtube.com",
    icon : "youtube",
  },
  {
    label: "WhatsApp",
    href : "https://wa.me/628xxx",
    icon : "whatsapp",
  },
]