function Card({ image, emoji, subtitle, title, description, children }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {image && <img src={image} alt={title} className="h-44 w-full object-cover" />}
      <div className="flex flex-1 flex-col p-6">
        {emoji && (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cream text-4xl">
            {emoji}
          </div>
        )}
        {subtitle && (
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-snack">{subtitle}</p>
        )}
        <h3 className="mt-1 text-lg font-extrabold text-choco">{title}</h3>
        {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
        {children}
      </div>
    </div>
  )
}

export default Card