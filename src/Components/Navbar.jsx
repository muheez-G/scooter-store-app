import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser, FaSearch } from 'react-icons/fa';
import logo from '../assets/images/GlideX_Logo.svg';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 transition-all duration-500 ease-in-out ${
      isSticky
        ? 'fixed top-0 bg-black bg-opacity-80 shadow-md'
        : 'absolute top-[48px] bg-transparent'
    }`}>
      <div className="py-6 px-4 md:px-8 flex items-center justify-between relative">
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-green-500">Home</Link>
          <Link to="/about" className="text-white hover:text-green-500">About</Link>
          <Link to="/contact" className="text-white hover:text-green-500">Contact</Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="w-[180px]" />
        </div>

        <div className="flex items-center space-x-4">
          <FaSearch className="text-white cursor-pointer" />
          <FaUser className="text-white cursor-pointer" />
          <FaCartPlus className="text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
