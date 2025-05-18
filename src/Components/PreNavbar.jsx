import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTruckFast,
  FaCircleCheck,
  FaBatteryFull,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';

const PreNavbar = () => {
  const promoMessages = [
    {
      icon: <FaTruckFast className="text-green-400" />,
      text: 'Free shipping on orders over $50',
    },
    {
      icon: <FaBatteryFull className="text-yellow-400" />,
      text: 'Battery lasts up to 120 miles',
    },
    {
      icon: <FaCircleCheck className="text-blue-400" />,
      text: '2-year warranty included',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + promoMessages.length) % promoMessages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promoMessages.length);
  };

  return (
    <div className="w-full bg-[#1b1b1b] px-6 md:px-10 py-4 flex items-center justify-between text-sm">
      {/* Left: Social Icons */}
      <div className="flex items-center gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaXTwitter size={18} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaFacebookF size={18} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaInstagram size={18} />
        </a>
      </div>

      {/* Center Promo (hidden on mobile) */}
      <div className="hidden sm:flex text-white font-medium items-center gap-3 select-none">
        <button onClick={handlePrev} className="text-gray-300 hover:text-white transition">
          <FaChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-2 text-center whitespace-nowrap">
          {promoMessages[currentIndex].text}
          {promoMessages[currentIndex].icon}
        </div>
        <button onClick={handleNext} className="text-gray-300 hover:text-white transition">
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* Right: Shop Now Button */}
      <div>
        <Link
          to="/shop"
          className="bg-green-500 text-white text-xs px-5 py-1.5 rounded hover:bg-green-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default PreNavbar;
