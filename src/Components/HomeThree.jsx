import React, { useState, useEffect } from 'react';
import product1 from '../Asset/product1.jpg';
import product2 from '../Asset/product1.2.jpg';
import product3 from '../Asset/product11.jpg';
import product4 from '../Asset/product11.2.jpg';
import product5 from '../Asset/product12.jpg';
import product6 from '../Asset/product12.2.jpg';
import battery from '../Asset/Battery-icon.svg';
import range from '../Asset/Range-icon.svg';
import emission from '../Asset/Emission-icon.svg';

const allProducts = [
  {
    id: 1,
    name: 'VeloWave M5',
    subtitle: 'Urban Commuting Evolution',
    image: product1,
    hoverImage: product2,
    duration: '6.30 hrs',
    range: '126 km',
    battery: '77 kWh',
    description:
      'Experience the pinnacle of eco-conscious commuting with the VeloWave M5. Crafted with state-of-the-art engineering, this scooter delivers extended battery life, high-performance acceleration, and advanced suspension. The M5 is perfect for busy city streets, offering fast charge times and seamless smartphone integration. Whether it’s your daily commute or a casual weekend ride, the M5 redefines electric mobility with unmatched comfort, reliability, and innovation.',
    price: 1099,
  },
  {
    id: 2,
    name: 'Scooter Z40X12',
    subtitle: 'Charging Convenience Included',
    image: product3,
    hoverImage: product4,
    duration: '10.30 hrs',
    range: '126 km',
    battery: '77 kWh',
    description:
      'Designed for modern commuters, the Scooter Z40X12 blends power with practicality. Foldable for easy storage and transport, it offers a silent, efficient ride with a high-capacity battery and rugged frame. Whether navigating tight corners or cruising on longer routes, the Z40X12 ensures you get there efficiently and in style. Built to endure all weather conditions, this scooter is your everyday partner in sustainable transportation.',
    price: 899,
  },
  {
    id: 3,
    name: 'Segway - Ninebot',
    subtitle: 'Efficiency Meets Style',
    image: product5,
    hoverImage: product6,
    duration: '8.30 hrs',
    range: '126 km',
    battery: '78 kWh',
    description:
      'The Segway Ninebot strikes a perfect balance between form and function. With aerodynamic design and lightweight body, it’s engineered for smooth acceleration and braking. Its intuitive interface, robust battery, and comfort-focused build make it ideal for both short errands and long rides. Whether in dense urban settings or open suburban roads, the Ninebot is the stylish, sustainable solution for forward-thinking riders.',
    price: 799,
  },
];

const HomeThree = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [successMessageId, setSuccessMessageId] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateWidth = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isTablet = screenWidth >= 640 && screenWidth < 1024;
  const products = isTablet
    ? allProducts.filter((p) => p.id === 1 || p.id === 2)
    : allProducts;

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
    setSuccessMessageId(product.id);
    setTimeout(() => setSuccessMessageId(null), 2000);
  };

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  return (
    <div className="w-full px-8 sm:px-6 lg:px-8 py-14 mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Explore our best collections
        </h2>
        <p className="text-gray-300 text-base sm:text-lg">
          Top kick scooter picks for an exhilarating ride
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-[#2b2b2b] rounded-xl overflow-hidden transition duration-300 shadow-lg hover:shadow-2xl"
          >
            <div
              onClick={() => openModal(product)}
              className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
            >
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
              <p className="text-gray-400 text-sm sm:text-base mb-6">{product.subtitle}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <img src={emission} alt="Duration" className="w-6 h-6" />
                  <div>
                    <p className="text-xs font-medium">Duration</p>
                    <p className="text-xs">{product.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={range} alt="Range" className="w-6 h-6" />
                  <div>
                    <p className="text-xs font-medium">Range</p>
                    <p className="text-xs">{product.range}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={battery} alt="Battery" className="w-6 h-6" />
                  <div>
                    <p className="text-xs font-medium">Battery</p>
                    <p className="text-xs">{product.battery}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => openModal(product)}
                className="mt-4 text-green-500 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalProduct && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4 sm:p-6">
    <div className="relative bg-[#1e1e1e] rounded-xl w-full max-w-md sm:max-w-4xl mx-auto p-5 sm:p-8 flex flex-col sm:flex-row overflow-auto max-h-[90vh]">
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-white text-lg hover:text-red-500"
      >
        ✕
      </button>
      <img
        src={modalProduct.image}
        alt={modalProduct.name}
        className="w-full sm:w-1/2 h-auto rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
      />
      <div className="text-white w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">{modalProduct.name}</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          {modalProduct.description}
        </p>
        <p className="text-lg font-semibold mb-4">${modalProduct.price}</p>
        <button
          onClick={() => addToCart(modalProduct)}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full sm:w-auto"
        >
          Add to Cart
        </button>
        {successMessageId === modalProduct.id && (
          <div className="mt-4 text-green-400 text-center text-sm">
            Added to cart successfully!
          </div>
        )}
      </div>
    </div>
  </div>
)}


      <div className="bg-[#2b2b2b] mt-16 rounded-xl px-6 py-8 text-white shadow-lg text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Grab it soon! Offer ends
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Charge up your future with an electric vehicle at the best affordable price
        </p>
      </div>
    </div>
  );
};

export default HomeThree;
