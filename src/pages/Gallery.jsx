import gallery from '../data/gallery'
import Card from '../components/Card'

function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-extrabold text-choco">Galeri</h1>
      <p className="mt-2 text-center text-gray-600">
        Dokumentasi kegiatan dan momen TihahLicious
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            subtitle={item.category}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery