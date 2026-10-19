import { Link } from 'react-router-dom'
import products from '../data/products'
import advantages from '../data/advantages'
import testimonials from '../data/testimonials'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <p className="inline-block rounded-full bg-sun/40 px-4 py-1 text-sm font-bold text-choco">
            🍪 Snack Lokal, Rasa Mewah
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-choco sm:text-5xl">
            Teman Ngemil, <span className="text-snack">Teman Bahagia!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Dari manisnya Bola Regal Cokelat, gurihnya Makaroni, hingga renyahnya
            Popcorn — setiap camilan kami hadir untuk memberikan pengalaman ngemil
            yang menyenangkan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="rounded-full bg-snack px-6 py-3 font-bold text-white shadow hover:bg-orange-600"
            >
              Jelajahi Produk 🍿!
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-choco px-6 py-3 font-bold text-choco hover:bg-choco hover:text-cream"
            >
              Hubungi Kami
            </Link>
          </div>
          <p className="mt-10 space-x-4 text-4xl">
            <span>🍪</span><span>🌶️</span><span>🍿</span><span>✨</span>
          </p>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-choco">Produk Kami</h2>
        <p className="mt-2 text-center text-gray-600">One Bite, Endless Delight!</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              emoji={product.emoji}
              subtitle={product.category}
              title={product.name}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-choco">
            Mengapa Memilih TihahLicious?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="mt-3 font-bold text-choco">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-choco">Kata Mereka</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <p className="text-xl">{"⭐".repeat(t.rating)}</p>
              <p className="mt-3 text-sm italic text-gray-600">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-bold text-choco">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-choco px-6 py-12 text-center text-cream">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Cemilan Kecil, Bahagia Besar 🎉
          </h2>
          <p className="mt-2 text-amber-100/80">
            Butuh snack untuk acara, hampers, atau stok ngemil harianmu?
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-sun px-6 py-3 font-bold text-choco hover:brightness-95"
          >
            Pesan Sekarang
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home