import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/GlideX_Logo.svg';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')));

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));
      setCurrentUser(storedUser);
    };
    window.addEventListener('storage', syncUser);
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`w-full z-50 transition-all duration-500 ${isSticky ? 'fixed top-0 bg-black bg-opacity-90 shadow-md' : 'absolute top-[48px]'}`}>
        <div className="flex items-center justify-between px-4 py-6 md:px-10">
          {/* Left: Links */}
          <div className="hidden md:flex flex-1 space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-green-500">Home</Link>
            <Link to="/shop" className="hover:text-green-500">Shop</Link>
            <Link to="/about" className="hover:text-green-500">About</Link>
            <Link to="/contact" className="hover:text-green-500">Contact</Link>
          </div>

          {/* Center: Logo */}
          <Link to="/" className="z-50">
            <img src={logo} alt="Logo" className="w-[150px] sm:w-[180px]" />
          </Link>

          {/* Right: Desktop Icons */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-4 text-white">
            <FaSearch className="cursor-pointer hover:text-green-500" />
            <Link to="/account"><FaUser className="cursor-pointer hover:text-green-500" /></Link>
            <Link to="/cart"><FaCartPlus className="cursor-pointer hover:text-green-500" /></Link>
          </div>

          {/* Hamburger */}
          <button className="md:hidden text-white text-2xl z-50" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-[#121212] text-white z-50 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Menu</h3>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <div className="p-6 border-b border-gray-700 text-center">
          <FaUser className="text-4xl mx-auto mb-2" />
          {currentUser ? (
            <>
              <h4 className="text-lg font-semibold">{currentUser.name}</h4>
              <p className="text-sm text-gray-400">{currentUser.email}</p>
              <button onClick={handleSignOut} className="mt-4 text-green-500 hover:underline">Sign Out</button>
            </>
          ) : (
            <Link to="/account" onClick={toggleMenu} className="text-green-500 hover:underline">Sign In</Link>
          )}
        </div>

        <nav className="flex flex-col space-y-4 p-6 font-medium">
          <Link to="/" onClick={toggleMenu} className="hover:text-green-500">Home</Link>
          <Link to="/shop" onClick={toggleMenu} className="hover:text-green-500">Shop</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-green-500">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-green-500">Contact</Link>
          <Link to="/cart" onClick={toggleMenu} className="hover:text-green-500">Cart</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
