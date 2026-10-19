import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-cocoa text-amber-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-extrabold text-white">🍪 TihahLicious</h3>
          <p className="mt-2 text-sm italic">"One Bite, Endless Delight!"</p>
          <p className="mt-2 text-sm text-amber-200/70">
            Camilan kecil, bahagia besar — untuk semua momen.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white">Navigasi</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/" className="hover:text-sun">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-sun">Tentang Kami</Link></li>
            <li><Link to="/products" className="hover:text-sun">Produk</Link></li>
            <li><Link to="/gallery" className="hover:text-sun">Galeri</Link></li>
            <li><Link to="/contact" className="hover:text-sun">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Hubungi Kami</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>📧 halo@tihahlicious.com</li>
            <li>📱 +62 812-3456-7890</li>
            <li>
              <a href="https://instagram.com" className="hover:text-sun">📸 @tihahlicious</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-amber-200/60">
        © 2026 PT TihahLicious. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer