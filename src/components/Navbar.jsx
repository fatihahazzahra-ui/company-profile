import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const menus = [
  { path: "/", label: "Beranda" },
  { path: "/about", label: "Tentang Kami" },
  { path: "/services", label: "Layanan" },
  { path: "/portfolio", label: "Portofolio" },
  { path: "/contact", label: "Kontak" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-blue-600">PT NamaKamu</Link>

        {/* Menu desktop */}
        <div className="hidden space-x-6 md:flex">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive ? "font-semibold text-blue-600" : "text-gray-700 hover:text-blue-600"
              }
            >
              {menu.label}
            </NavLink>
          ))}
        </div>

        {/* Tombol hamburger (hanya muncul di mobile) */}
        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t px-4 pb-4 md:hidden">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700"
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