import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser, FaSearch } from 'react-icons/fa';
import logo from '../assets/images/GlideX_Logo.svg'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left: Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-green-600">Home</Link>
          <Link to="/about" className="text-white hover:text-green-600">About</Link>
          <Link to="/contact" className="text-white hover:text-green-600">Contact</Link>
        </div>

        {/* Middle: Logo */}
        <div className=""> <img src={ logo } className="w-100px" /></div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="cursor-pointer text-white"/>
          <FaUser className="cursor-pointer text-white" />
          <FaCartPlus className="cursor-pointe text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
