import React from 'react';
import slider from '../assets/images/Slider_01.jpg';

const HeroBanner = () => {
  return (
    <div
      className="bg-cover bg-center h-[100vh] flex items-center"
      style={{ backgroundImage: `url(${slider})` }} // <-- FIXED
    >
      <div className="max-w-4xl px-6 md:px-12 text-left text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Spark the Future with Eco-friendly E-Scooters
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Say goodbye to gas-guzzling vehicles and hello to road electric scooters.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Shop Now
          </button>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
