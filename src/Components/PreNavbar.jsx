import React from 'react';
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

const PreNavbar = () => {
  return (
    <div className="w-full bg-gray-900 px-4 py-2 flex items-center justify-between text-sm">
      <div className="flex gap-4">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-700 transition">
          <FaXTwitter size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-700 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-700 transition">
          <FaInstagram size={20} />
        </a>
      </div>

      <div className="text-white font-medium">Free shipping on orders over $50</div>

      <div>
        <button className="bg-black text-white text-xs px-4 py-1 rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PreNavbar;
