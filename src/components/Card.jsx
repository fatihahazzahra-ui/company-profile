function Card({ icon, title, description, image }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {image && <img src={image} alt={title} className="h-44 w-full object-cover" />}
      <div className="p-6">
        {icon && <div className="text-4xl">{icon}</div>}
        <h3 className="mt-3 text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card