import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black bg-opacity-70 text-white fixed top-0 w-full z-50">
      <h1 className="text-xl font-bold">The Resell Plug</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
