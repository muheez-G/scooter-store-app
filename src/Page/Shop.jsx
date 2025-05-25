import React, { useState } from 'react';
import product1 from '../Asset/Product1.jpg';
import product2 from '../Asset/Product1.2.jpg';
import product3 from '../Asset/Product11.jpg';
import product4 from '../Asset/Product11.2.jpg';
import product5 from '../Asset/Product12.jpg';
import product6 from '../Asset/Product12.2.jpg';
import product7 from '../Asset/Product10.jpg';
import product8 from '../Asset/Product10.1.jpg';
import product9 from '../Asset/Product2.jpg';
import product10 from '../Asset/Product2.1.jpg';
import product11 from '../Asset/Product3.jpg';
import product12 from '../Asset/Product3.2.jpg';
import product13 from '../Asset/Product4.jpg';
import product14 from '../Asset/Product4.1.jpg';
import product15 from '../Asset/Product5.jpg';
import product16 from '../Asset/Product5.1.jpg';
import product17 from '../Asset/Product8.jpg';
import product18 from '../Asset/Product8.2.jpg';
import product19 from '../Asset/Product13.jpg';
import product20 from '../Asset/Product13.2.jpg';
import product21 from '../Asset/Product14.jpg';
import product22 from '../Asset/Product17.jpg';
import product23 from '../Asset/Product17.1.jpg';
import product24 from '../Asset/Product19.jpg';
import product25 from '../Asset/Product19.1.jpg';

import battery from '../Asset/Battery-icon.svg';
import range from '../Asset/Range-icon.svg';
import emission from '../Asset/Emission-icon.svg';
import material from '../Asset/Material.png';
import charge from '../Asset/Charge.png';

const products = [
  { id: 1, name: 'VeloWave M5', subtitle: 'Urban Commuting Evolution', image: product1, hoverImage: product2, duration: '6.30 hrs', range: '126 km', battery: '77 kWh', price: 1199 },
  { id: 2, name: 'Electric Scooter', subtitle: 'Charging Convenience Included', image: product3, hoverImage: product4, duration: '10.30 hrs', range: '126 km', battery: '79 kWh', price: 999 },
  { id: 3, name: 'Segway - Ninebot Z40X12', subtitle: 'Efficiency Meets Style', image: product5, hoverImage: product6, duration: '8.30 hrs', range: '126 km', battery: '78 kWh', price: 899 },
  { id: 4, name: 'Electra Zoomer', subtitle: 'Sleek & Fast E-Ride', image: product7, hoverImage: product8, duration: '9.15 hrs', range: '130 km', battery: '80 kWh', price: 1049 },
  { id: 5, name: 'Turbo Glide Pro', subtitle: 'Speed with Comfort', image: product9, hoverImage: product10, duration: '7.20 hrs', range: '120 km', battery: '75 kWh', price: 929 },
  { id: 6, name: 'EcoRider X1', subtitle: 'The Future of Urban Travel', image: product11, hoverImage: product12, duration: '8.10 hrs', range: '118 km', battery: '76 kWh', price: 979 },
  { id: 7, name: 'GlideJet 2X', subtitle: 'Electric Redefined', image: product13, hoverImage: product14, duration: '9.45 hrs', range: '133 km', battery: '81 kWh', price: 1099 },
  { id: 8, name: 'UrbanGlide Cotton Hoodie', subtitle: 'City Commute Armor', image: product15, hoverImage: product16, Material: 'Cotton', icon: material, price: 69 },
  { id: 9, name: 'ScooterCharge Pro', subtitle: 'Green Power for Your Scooter', image: product17, hoverImage: product18, Type: 'Wall connector', icon: charge, price: 149 },
  { id: 10, name: 'HyperDash 5', subtitle: 'Lightning-Fast Commute', image: product19, hoverImage: product20, duration: '6.45 hrs', range: '125 km', battery: '79 kWh', price: 999 },
  { id: 11, name: 'VoltCruze LX', subtitle: 'Silent Power on Wheels', image: product22, hoverImage: product23, duration: '7.30 hrs', range: '122 km', battery: '78 kWh', price: 1029 },
  { id: 12, name: 'NeoRider Pro', subtitle: 'Smart, Sleek, Sustainable', image: product24, hoverImage: product25, duration: '6.50 hrs', range: '124 km', battery: '77 kWh', price: 979 }
];

const Shop = () => {
  const [page, setPage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowSuccess(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === selectedProduct.id);
    if (exists) {
      exists.quantity = (exists.quantity || 1) + 1;
    } else {
      cart.push({ ...selectedProduct, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowSuccess(true);
  };

  return (
    <div className="text-white px-4 sm:px-8 pt-16 md:px-10 lg:px-12 xl:px-16 pb-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentItems.map((product) => (
          <div key={product.id} className="group bg-[#2b2b2b] rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300">
            <div onClick={() => openModal(product)} className="relative aspect-[4/3] overflow-hidden cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500" />
              <img src={product.hoverImage} alt={`${product.name} Hover`} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-300">
                {product.duration && <div className="flex items-center gap-1"><img src={emission} alt="Duration" className="w-4" />{product.duration}</div>}
                {product.range && <div className="flex items-center gap-1"><img src={range} alt="Range" className="w-4" />{product.range}</div>}
                {product.battery && <div className="flex items-center gap-1"><img src={battery} alt="Battery" className="w-4" />{product.battery}</div>}
                {product.Material && <div className="flex items-center gap-1"><img src={product.icon} alt="Material" className="w-4" />{product.Material}</div>}
                {product.Type && <div className="flex items-center gap-1"><img src={product.icon} alt="Type" className="w-4" />{product.Type}</div>}
              </div>
              <button onClick={() => openModal(product)} className="mt-3 text-sm underline text-green-400 hover:text-green-500">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 text-sm">
        <button disabled={page === 0} onClick={() => setPage(page - 1)} className="border border-gray-500 px-3 py-1 rounded hover:bg-white hover:text-black disabled:opacity-30">&lt;</button>
        {[...Array(totalPages).keys()].map(num => (
          <button key={num} onClick={() => setPage(num)} className={`px-3 py-1 rounded ${page === num ? 'bg-green-500' : 'border border-gray-500 hover:bg-white hover:text-black'}`}>{num + 1}</button>
        ))}
        <button disabled={page === totalPages - 1} onClick={() => setPage(page + 1)} className="border border-gray-500 px-3 py-1 rounded hover:bg-white hover:text-black disabled:opacity-30">&gt;</button>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4 py-8">
          <div className="bg-[#1e1e1e] rounded-xl w-full max-w-4xl p-6 relative flex flex-col lg:flex-row max-h-[85vh] lg:max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl">&times;</button>
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-6">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-1">{selectedProduct.name}</h2>
              <p className="text-sm text-gray-300 mb-2">{selectedProduct.subtitle}</p>
              <p className="text-gray-400 text-sm mb-4">
                Discover the pinnacle of innovation with the {selectedProduct.name}, engineered for efficiency, performance, and modern urban lifestyles. Designed with cutting-edge components and an eye for aesthetics, it’s your perfect partner for everyday travel and weekend adventures alike.
              </p>
              <p className="text-lg font-semibold text-white mb-4">${selectedProduct.price}</p>
              <button onClick={addToCart} className="bg-green-500 hover:bg-green-600 w-full py-2 rounded font-medium">Add to Cart</button>
              {showSuccess && (
                <div className="text-green-400 mt-4 text-center font-medium">Item successfully added to cart!</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
