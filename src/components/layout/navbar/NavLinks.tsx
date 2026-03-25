import { NAV_LINKS } from "./Navbar.Constants"
import { NavDropdown } from "./NavDropdown"

export const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      {NAV_LINKS.map((item) =>
        item.children ? (
          <NavDropdown key={item.label} label={item.label} children={item.children} />
        ) : (
          <a
            key={item.label}
            href={item.href}
            className="px-3 py-2 font-medium text-slate-700 hover:text-teal-600 rounded-md"
          >
            {item.label}
          </a>
        )
      )}
    </div>
  )
}