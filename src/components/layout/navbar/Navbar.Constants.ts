export interface NavDropdownItem {
  label       : string
  href        : string
  description?: string
  icon        : "location" | "article" | "video" | "brochure"
}

export interface NavItem {
  label    : string
  href    ?: string                // jika ada → link biasa
  dropdown?: NavDropdownItem[]    // jika ada → punya submenu
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href : "/about",
  },
  {
    label   : "Tempat Praktik",
    dropdown: [
      {
        label      : "Tempat Praktik 1",
        href       : "/klinik/1",
        description: "Jl. Kesehatan No. 12",
        icon       : "location",
      },
      {
        label      : "Tempat Praktik 2",
        href       : "/klinik/2",
        description: "Jl. Medika Raya No. 5",
        icon       : "location",
      },
      {
        label      : "Tempat Praktik 3",
        href       : "/klinik/3",
        description: "Jl. Sehat Bersama No. 8",
        icon       : "location",
      },
    ],
  },
  {
    label   : "Edukasi",
    dropdown: [
      {
        label      : "Artikel",
        href       : "/education/articles",
        description: "Tips & informasi kesehatan",
        icon       : "article",
      },
      {
        label      : "Video",
        href       : "/education/videos",
        description: "Edukasi visual interaktif",
        icon       : "video",
      },
      {
        label      : "Brosur",
        href       : "/education/brochures",
        description: "Unduh materi edukasi",
        icon       : "brochure",
      },
    ],
  },
]

export const NAV_CTA = {
  label: "Daftar Antrian Online",
  href : "/antrian",
}