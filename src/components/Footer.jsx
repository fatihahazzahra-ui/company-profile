import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-white">PT NamaKamu</h3>
          <p className="mt-2 text-sm">Solusi digital untuk mengembangkan bisnis Anda.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Navigasi</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/" className="hover:text-white">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-white">Layanan</Link></li>
            <li><Link to="/contact" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Ikuti Kami</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
            <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © 2026 PT NamaKamu. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer