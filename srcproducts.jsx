import React, { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 pt-32">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default Products
