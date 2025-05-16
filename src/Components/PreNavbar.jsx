import React, { useState } from 'react';
import { FaXTwitter, FaFacebookF, FaInstagram, FaTruckFast, FaCircleCheck, FaBatteryFull, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const PreNavbar = () => {
  // Promo messages array
  const promoMessages = [
    {
      icon: <FaTruckFast className="text-green-400" />,
      text: "Free shipping on orders over $50",
    },
    {
      icon: <FaBatteryFull className="text-yellow-400" />,
      text: "Battery lasts up to 120 miles",
    },
    {
      icon: <FaCircleCheck className="text-blue-400" />,
      text: "2-year warranty included",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate back
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + promoMessages.length) % promoMessages.length);
  };

  // Navigate forward
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promoMessages.length);
  };

  return (
    <div className="w-full bg-[#1b1b1b] px-4 md:px-8 py-4 flex items-center justify-between text-sm">
      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaXTwitter size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Center Promo with Arrows */}
      <div className="text-white font-medium flex items-center gap-2 select-none">
        {/* Left Arrow */}
        <button onClick={handlePrev} className="text-gray-300 hover:text-white transition">
          <FaChevronLeft size={16} />
        </button>

        {/* Current Promo Message */}
        <div className="flex items-center gap-2 px-2 text-center whitespace-nowrap">
          {promoMessages[currentIndex].text}
          {promoMessages[currentIndex].icon}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="text-gray-300 hover:text-white transition">
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-black text-white text-xs px-4 py-1 rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PreNavbar;
