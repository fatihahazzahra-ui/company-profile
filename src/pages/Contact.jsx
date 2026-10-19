import { useState } from 'react'
import faq from '../data/faq'

function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const err = {}
    if (!form.nama.trim()) err.nama = 'Nama wajib diisi'
    if (!form.email.trim()) err.email = 'Email wajib diisi'
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Format email tidak valid'
    if (!form.pesan.trim()) err.pesan = 'Pesan wajib diisi'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) {
      setSuccess(true)
      setForm({ nama: '', email: '', pesan: '' })
    } else {
      setSuccess(false)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-extrabold text-choco">
        Let's Connect with TihahLicious! 🧡
      </h1>
      <p className="mt-2 text-center text-gray-600">
        Punya pertanyaan tentang produk kami atau tertarik bekerja sama? Kami siap menyambut pesanmu!
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Info Kontak */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-cream p-5">
            <p className="font-bold text-choco">📧 Email</p>
            <p className="text-gray-600">halo@tihahlicious.com</p>
          </div>
          <div className="rounded-2xl bg-cream p-5">
            <p className="font-bold text-choco">📱 WhatsApp Bisnis</p>
            <p className="text-gray-600">+62 812-3456-7890</p>
          </div>
          <div className="rounded-2xl bg-cream p-5">
            <p className="font-bold text-choco">📸 Instagram</p>
            <p className="text-gray-600">@tihahlicious</p>
          </div>
          <p className="pt-2 text-sm italic text-gray-500">
            Good snacks, good mood, good moments. ✨
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {success && (
            <p className="rounded-xl bg-green-100 p-3 text-green-700">
              🎉 Pesan berhasil dikirim! Tim kami akan segera membalas.
            </p>
          )}
          <div>
            <input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama"
              className="w-full rounded-xl border border-amber-200 p-3 focus:border-snack focus:outline-none"
            />
            {errors.nama && <p className="mt-1 text-sm text-red-500">{errors.nama}</p>}
          </div>
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-xl border border-amber-200 p-3 focus:border-snack focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="pesan"
              value={form.pesan}
              onChange={handleChange}
              placeholder="Pesan"
              rows="4"
              className="w-full rounded-xl border border-amber-200 p-3 focus:border-snack focus:outline-none"
            />
            {errors.pesan && <p className="mt-1 text-sm text-red-500">{errors.pesan}</p>}
          </div>
          <button
            type="submit"
            className="rounded-full bg-snack px-8 py-3 font-bold text-white hover:bg-orange-600"
          >
            Kirim Pesan 💌
          </button>
        </form>
      </div>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-extrabold text-choco">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faq.map((item, index) => (
            <div key={item.id} className="overflow-hidden rounded-xl border border-amber-200">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between bg-cream px-4 py-3 text-left font-bold text-choco"
              >
                {item.question}
                <span className="text-xl">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <p className="bg-white px-4 py-3 text-sm text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact