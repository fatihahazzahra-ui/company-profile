import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const menus = [
  { path: "/", label: "Beranda" },
  { path: "/about", label: "Tentang Kami" },
  { path: "/products", label: "Produk" },
  { path: "/gallery", label: "Galeri" },
  { path: "/contact", label: "Kontak" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-extrabold text-choco">
          🍪 Tihah<span className="text-snack">Licious</span>
        </Link>

        <div className="hidden space-x-6 md:flex">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive ? "font-bold text-snack" : "text-choco hover:text-snack"
              }
            >
              {menu.label}
            </NavLink>
          ))}
        </div>

        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t px-4 pb-4 md:hidden">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-choco"
            >
              {menu.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar