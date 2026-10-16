import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

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
    if (Object.keys(err).length === 0) {
      setSuccess(true)           // valid sukses
      setForm({ nama: '', email: '', pesan: '' })
    } else {
      setErrors(err)
      setSuccess(false)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">Hubungi Kami</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        {/* Info kontak */}
        <div>
          <p className="font-semibold">Alamat</p>
          <p className="text-gray-600">Jl. Contoh No. 123, Jakarta</p>
          <p className="mt-4 font-semibold">Email</p>
          <p className="text-gray-600">info@perusahaan.com</p>
          {/* + link sosmed */}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {success && (
            <p className="rounded bg-green-100 p-3 text-green-700">Pesan berhasil dikirim!</p>
          )}
          <div>
            <input name="nama" value={form.nama} onChange={handleChange}
              placeholder="Nama" className="w-full rounded border p-3" />
            {errors.nama && <p className="text-sm text-red-500">{errors.nama}</p>}
          </div>
          <div>
            <input name="email" value={form.email} onChange={handleChange}
              placeholder="Email" className="w-full rounded border p-3" />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <textarea name="pesan" value={form.pesan} onChange={handleChange}
              placeholder="Pesan" rows="4" className="w-full rounded border p-3" />
            {errors.pesan && <p className="text-sm text-red-500">{errors.pesan}</p>}
          </div>
          <button type="submit" className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact