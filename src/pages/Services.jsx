import services from '../data/services'
import Card from '../components/Card'

function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Layanan Kami</h1>
      <p className="mt-2 text-center text-gray-600">Solusi digital untuk bisnis Anda</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}

export default Services