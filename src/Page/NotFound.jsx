import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Page Not Found</p>
      <Link to="/" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound

