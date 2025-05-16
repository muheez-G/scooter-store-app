import React from 'react';
import logo from '../assets/images/GlideX_Logo.svg';
import { GrLocation } from 'react-icons/gr';
import { MdAddIcCall, MdSend } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <div className="bg-[#12121275] text-white px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Logo + Contact */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Logo" className="w-28" />
            <p className="text-sm text-gray-300">
              Street offers government-certified mixed vehicles at affordable prices,
              ensuring quality EVs on the road.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <GrLocation className="mt-1 text-white" />
              <p>8642 Yule Street, Arvada CO 80007</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MdAddIcCall className='text-green'/>
              <p>+(248) 762-0356</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <LuMessageSquare className='text-green'/>
              <p>support@road.com</p>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="text-2xl font-semibold mb-2">About Us</h3>
            <p className="hover:text-green-400 cursor-pointer">Our Story</p>
            <p className="hover:text-green-400 cursor-pointer">Contact</p>
            <p className="hover:text-green-400 cursor-pointer">Blogs</p>
            <p className="hover:text-green-400 cursor-pointer">Our Mission</p>
          </div>

          {/* Column 3: Collections */}
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="text-2xl font-semibold mb-2">Collections</h3>
            <p className="hover:text-green-400 cursor-pointer">Adventure Gear</p>
            <p className="hover:text-green-400 cursor-pointer">Eco Essentials</p>
            <p className="hover:text-green-400 cursor-pointer">Scoot Accessories</p>
            <p className="hover:text-green-400 cursor-pointer">Style & Safety</p>
          </div>

          {/* Column 4: Newsletter + Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Stay Updated</h3>
            <div className="flex border border-gray-400 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-green-600 px-4 flex items-center justify-center hover:bg-green-700 transition">
                <MdSend />
              </button>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <FaXTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="bg-[#12121275] text-white text-center text-sm py-6 px-6">
        <p>&copy; {new Date().getFullYear()} GlideX Store. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
