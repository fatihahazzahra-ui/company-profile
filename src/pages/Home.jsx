import { Link } from 'react-router-dom'
import services from '../data/services'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-blue-700 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">Wujudkan Bisnis Digital Anda</h1>
          <p className="mt-4 text-lg text-blue-100">
            PT NamaKamu membantu perusahaan bertransformasi melalui teknologi.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Ringkasan singkat */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Kenali Kami</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          PT NamaKamu adalah perusahaan teknologi yang berdiri sejak 2020. Kami telah
          membantu lebih dari 50 klien dari berbagai industri dalam membangun produk
          digital mereka.
        </p>
      </section>

      {/* Layanan unggulan (ambil 3 pertama dari data) */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-center text-3xl font-bold">Layanan Unggulan</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Card key={service.id} {...service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="font-semibold text-blue-600 hover:underline">
            Lihat semua layanan →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home