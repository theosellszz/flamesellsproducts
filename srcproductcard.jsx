import React from 'react'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      {product.outOfStock && <p className="text-red-500 font-bold">Out of Stock</p>}
      <select className="my-2 w-full border p-1">
        {product.variants.map((v, i) => (
          <option key={i}>{v}</option>
        ))}
      </select>
      {!product.outOfStock && (
        <button onClick={() => addToCart(product)} className="w-full bg-black text-white py-2 rounded mt-2">
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductCard
