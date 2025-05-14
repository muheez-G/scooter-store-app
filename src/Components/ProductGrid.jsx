import React from 'react';

const products = [
  { id: 1, name: 'Scooter A', price: '$299', img: '/product1.jpg' },
  { id: 2, name: 'Scooter B', price: '$349', img: '/product2.jpg' },
  { id: 3, name: 'Scooter C', price: '$399', img: '/product3.jpg' },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
