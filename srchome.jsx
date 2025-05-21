import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center pt-32">
      <h1 className="text-4xl font-bold mb-4">Welcome to The Resell Plug</h1>
      <p className="mb-6 text-lg">Best 1:1 products. Fast shipping. Apple Cash only.</p>
      <Link to="/products" className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
        Shop Now
      </Link>
    </div>
  )
}

export default Home
