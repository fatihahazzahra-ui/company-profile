import products from '../data/products'
import Card from '../components/Card'

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-3xl font-extrabold text-choco">Produk Kami</h1>
      <p className="mt-2 text-center text-gray-600">
        Pilih favoritmu — manis, gurih, atau renyah!
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            emoji={product.emoji}
            subtitle={product.category}
            title={product.name}
            description={product.description}
          >
            <div className="mt-3 flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <span
                  key={variant}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-choco"
                >
                  {variant}
                </span>
              ))}
            </div>
            <p className="mt-4 font-extrabold text-snack">{product.price}</p>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        *Harga dapat berubah. Hubungi kami untuk info stok terbaru dan pemesanan jumlah besar.
      </p>
    </div>
  )
}

export default Products