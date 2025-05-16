import React from 'react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product1.2.jpg';
import product3 from '../assets/images/product11.jpg';
import product4 from '../assets/images/product11.2.jpg';
import product5 from '../assets/images/product12.jpg';
import product6 from '../assets/images/product12.2.jpg';
import battery from '../assets/images/Battery-icon.svg';
import range from '../assets/images/Range-icon.svg';
import emission from '../assets/images/Emission-icon.svg';

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
    battery: '77 kWh',
  },
  {
    id: 3,
    name: 'Segway - Ninebot Z40X12',
    subtitle: 'Efficiency Meets Style',
    image: product5,
    hoverImage: product6,
    duration: '8.30 hrs',
    range: '126 km',
    battery: '77 kWh',
  },
];

const HomeThree = () => {
  return (
    <div className="w-[92vw] mx-auto py-14">
      {/* Header Section */}
      <div className="text-center mb-14 px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore our best collections
        </h2>
        <p className="text-gray-300 text-lg">
          Top kick scooter picks for an exhilarating ride
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group bg-[#2b2b2b] rounded-xl overflow-hidden transition duration-300 shadow-xl hover:shadow-2xl"
            style={{
              marginLeft: index === 0 ? '0' : undefined,
              marginRight: index === products.length - 1 ? '0' : undefined,
            }}
          >
            <div className="relative w-full h-[480px] overflow-hidden cursor-pointer">
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
            <div className="p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-6 text-base">{product.subtitle}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <img src={emission} alt="Duration" className="w-7 h-7" />
                  <div>
                    <p className="font-medium text-sm">Duration</p>
                    <p className="text-sm">{product.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={range} alt="Range" className="w-7 h-7" />
                  <div>
                    <p className="font-medium text-sm">Range</p>
                    <p className="text-sm">{product.range}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={battery} alt="Battery" className="w-7 h-7" />
                  <div>
                    <p className="font-medium text-sm">Battery</p>
                    <p className="text-sm">{product.battery}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#2b2b2b] mt-16 rounded-xl px-6 py-8 text-white shadow-xl w-full">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Grab it soon! Offer ends
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Charge up your future with an electric vehicle at the best affordable price
        </p>
      </div>
    </div>
  );
};

export default HomeThree;
