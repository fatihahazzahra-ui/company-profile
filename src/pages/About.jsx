import team from '../data/team'

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Tentang Kami</h1>

      {/* Sejarah */}
      <section className="mx-auto mt-10 max-w-3xl leading-relaxed text-gray-600">
        <p>
          PT NamaKamu berdiri pada tahun 2020, dimulai dari tim kecil beranggotakan
          3 orang yang memiliki passion di bidang teknologi. Berawal dari mengerjakan
          proyek website untuk UMKM di sekitar, kini kami telah berkembang menjadi
          perusahaan digital dengan puluhan klien dari berbagai bidang.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-700">Visi</h2>
          <p className="mt-2 text-gray-600">
            Menjadi partner teknologi terpercaya yang mengakselerasi digitalisasi
            bisnis di Indonesia.
          </p>
        </div>
        <div className="rounded-xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-700">Misi</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
            <li>Menghadirkan produk digital berkualitas tinggi</li>
            <li>Membantu UMKM bertransformasi digital</li>
            <li>Mengembangkan talenta teknologi muda</li>
          </ul>
        </div>
      </section>

      {/* Profil tim */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold">Tim Kami</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-3 font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About