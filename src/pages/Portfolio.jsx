import portfolio from '../data/portfolio'
import Card from '../components/Card'

function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Portofolio</h1>
      <p className="mt-2 text-center text-gray-600">Proyek yang pernah kami kerjakan</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <Card key={item.id} image={item.image} title={item.title} description={item.category} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio