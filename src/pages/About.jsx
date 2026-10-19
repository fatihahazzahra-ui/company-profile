import team from '../data/team'

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-extrabold text-choco">Tentang Kami</h1>
      <p className="mt-2 text-center text-gray-600">Mengenal Lebih Dekat TihahLicious</p>

      {/* Our Story */}
      <section className="mx-auto mt-10 max-w-3xl leading-relaxed text-gray-600">
        <p>
          PT TihahLicious merupakan perusahaan yang bergerak di bidang makanan ringan,
          dengan menghadirkan beragam camilan bercita rasa lezat, menarik, dan cocok
          dinikmati dalam berbagai suasana. Berawal dari dapur rumah pada tahun 2021,
          TihahLicious lahir dari kecintaan pendirinya, Siti Tihah, pada seni membuat
          camilan yang membawa senyum.
        </p>
        <p className="mt-4">
          Bagi kami, camilan bukan sekadar makanan ringan, tetapi juga bagian kecil
          dari kebahagiaan yang bisa dibagikan bersama teman, keluarga, dan orang-orang
          tersayang. Melalui inovasi produk dan perhatian terhadap kualitas,
          TihahLicious ingin menjadi pilihan camilan favorit bagi masyarakat.
        </p>
      </section>

      {/* Visi Misi */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-choco p-6 text-cream">
          <h2 className="text-xl font-extrabold text-sun">Visi</h2>
          <p className="mt-2">
            Menjadi perusahaan snack yang inovatif, berkualitas, dan dikenal sebagai
            pilihan camilan favorit masyarakat dengan menghadirkan rasa serta
            pengalaman ngemil yang menyenangkan.
          </p>
        </div>
        <div className="rounded-2xl bg-cream p-6">
          <h2 className="text-xl font-extrabold text-choco">Misi</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
            <li>Menghadirkan produk camilan yang lezat dan berkualitas</li>
            <li>Mengembangkan variasi produk sesuai selera konsumen</li>
            <li>Menjaga kebersihan dan kualitas dalam proses produksi</li>
            <li>Memberikan pelayanan yang ramah dan memuaskan</li>
            <li>Membangun merek snack yang kreatif, kompetitif, dan berkelanjutan</li>
          </ul>
        </div>
      </section>

      {/* Tim */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-extrabold text-choco">Tim Kami</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full border-4 border-sun object-cover"
              />
              <h3 className="mt-3 font-bold text-choco">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About