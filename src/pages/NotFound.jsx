import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Kechirasiz, sahifa topilmadi.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}

export default NotFound