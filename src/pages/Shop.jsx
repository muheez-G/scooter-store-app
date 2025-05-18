import React, { useState } from 'react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product1.2.jpg';
import product3 from '../assets/images/product11.jpg';
import product4 from '../assets/images/product11.2.jpg';
import product5 from '../assets/images/product12.jpg';
import product6 from '../assets/images/product12.2.jpg';
import product7 from '../assets/images/product10.jpg';
import product8 from '../assets/images/product10.1.jpg';
import product9 from '../assets/images/product2.jpg';
import product10 from '../assets/images/product2.1.jpg';
import product11 from '../assets/images/product3.jpg';
import product12 from '../assets/images/product3.2.jpg';
import product13 from '../assets/images/product4.jpg';
import product14 from '../assets/images/product4.1.jpg';
import product15 from '../assets/images/product5.jpg';
import product16 from '../assets/images/product5.1.jpg';
import product17 from '../assets/images/product8.jpg';
import product18 from '../assets/images/product8.2.jpg';
import product19 from '../assets/images/product13.jpg';
import product20 from '../assets/images/product13.2.jpg';
import product21 from '../assets/images/product14.jpg';
import product22 from '../assets/images/product17.jpg';
import product23 from '../assets/images/product17.1.jpg';
import product24 from '../assets/images/product19.jpg';
import product25 from '../assets/images/product19.1.jpg';

import battery from '../assets/images/Battery-icon.svg';
import range from '../assets/images/Range-icon.svg';
import emission from '../assets/images/Emission-icon.svg';
import material from '../assets/images/Material.png';
import charge from '../assets/images/Charge.png';

const products = [
  {
    id: 1,
    name: 'VeloWave M5',
    subtitle: 'Urban Commuting Evolution',
    image: product1,
    hoverImage: product2,
    duration: '6.30 hrs',
    range: '126 km',
    battery: '77 kWh',
  },
  {
    id: 2,
    name: 'Electric Scooter',
    subtitle: 'Charging Convenience Included',
    image: product3,
    hoverImage: product4,
    duration: '10.30 hrs',
    range: '126 km',
    battery: '79 kWh',
  },
  {
    id: 8,
    name: 'UrbanGlide Cotton Hoodie',
    subtitle: 'City Commute Armor',
    image: product15,
    hoverImage: product16,
    Material: 'Cotton',
    icon: material,
  },
  {
    id: 4,
    name: 'Electra Zoomer',
    subtitle: 'Sleek & Fast E-Ride',
    image: product7,
    hoverImage: product8,
    duration: '9.15 hrs',
    range: '130 km',
    battery: '80 kWh',
  },
  {
    id: 5,
    name: 'Turbo Glide Pro',
    subtitle: 'Speed with Comfort',
    image: product9,
    hoverImage: product10,
    duration: '7.20 hrs',
    range: '120 km',
    battery: '75 kWh',
  },
  {
    id: 6,
    name: 'EcoRider X1',
    subtitle: 'The Future of Urban Travel',
    image: product11,
    hoverImage: product12,
    duration: '8.10 hrs',
    range: '118 km',
    battery: '76 kWh',
  },
  {
    id: 7,
    name: 'GlideJet 2X',
    subtitle: 'Electric Redefined',
    image: product13,
    hoverImage: product14,
    duration: '9.45 hrs',
    range: '133 km',
    battery: '81 kWh',
  },
  {
    id: 9,
    name: 'ScooterCharge Pro',
    subtitle: 'Green Power for Your Scooter',
    image: product17,
    hoverImage: product18,
    Type: 'Wall connector',
    icon: charge,
  },
  {
    id: 10,
    name: 'HyperDash 5',
    subtitle: 'Lightning-Fast Commute',
    image: product19,
    hoverImage: product20,
    duration: '6.45 hrs',
    range: '125 km',
    battery: '79 kWh',
  },
  {
    id: 3,
    name: 'Segway - Ninebot Z40X12',
    subtitle: 'Efficiency Meets Style',
    image: product5,
    hoverImage: product6,
    duration: '8.30 hrs',
    range: '126 km',
    battery: '78 kWh',
  },
  {
    id: 11,
    name: 'VoltCruze LX',
    subtitle: 'Silent Power on Wheels',
    image: product22,
    hoverImage: product23,
    duration: '7.30 hrs',
    range: '122 km',
    battery: '78 kWh',
  },
  {
    id: 12,
    name: 'NeoRider Pro',
    subtitle: 'Smart, Sleek, Sustainable',
    image: product24,
    hoverImage: product25,
    duration: '6.50 hrs',
    range: '124 km',
    battery: '77 kWh',
  },
];

const Shop = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3 * 2; // 3 rows of 2 items = 6 per page (adjusts by screen)
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = products.slice(start, end);

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (end < products.length) setPage((prev) => prev + 1);
  };

  return (
    <div className="px-4 sm:px-8 pt-[4rem] md:px-10 lg:px-12 xl:px-16 py-10 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <img src={product21} alt="Product Highlight" className="w-full md:w-1/2 rounded-xl" />
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Our Products</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl">
            View our revolutionary products built for performance and urban mobility. Designed to elevate your ride, streamline your commute, and inspire your next adventure.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="group bg-[#2b2b2b] rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition duration-500"
              />
              <img
                src={product.hoverImage}
                alt={`${product.name} Hover`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.subtitle}</p>

              {product.duration && (
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <img src={emission} className="w-5 h-5" alt="Duration" />
                    <span>{product.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={range} className="w-5 h-5" alt="Range" />
                    <span>{product.range}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={battery} className="w-5 h-5" alt="Battery" />
                    <span>{product.battery}</span>
                  </div>
                </div>
              )}

              {product.Material && (
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <img src={product.icon} className="w-5 h-5" alt="Material" />
                  <span>{product.Material}</span>
                </div>
              )}
              {product.Type && (
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <img src={product.icon} className="w-5 h-5" alt="Type" />
                  <span>{product.Type}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className={`p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition ${page === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={end >= products.length}
          className={`p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition ${end >= products.length ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Shop;
