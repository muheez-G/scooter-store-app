import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA = () => (
  <div className="relative w-full flex justify-center items-center py-8 px-4">
    {/* Horizontal line */}
    <div className="absolute h-px w-full bg-gray-400 z-0 top-1/2" />

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 text-center">
      <Link to="/shop">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition w-40">
          Buy now
        </button>
      </Link>
      <Link to="/shop">
        <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition w-40">
          View shop
        </button>
      </Link>
    </div>
  </div>
);

export default AboutCTA;
