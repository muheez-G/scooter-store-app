import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user] = useState(() => JSON.parse(localStorage.getItem('currentUser')));
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const handleRemove = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    updateCart(updatedItems);
  };

  const handleQuantityChange = (index, delta) => {
    const updatedItems = [...cartItems];
    const newQty = (updatedItems[index].quantity || 1) + delta;
    if (newQty < 1) return;
    updatedItems[index].quantity = newQty;
    updateCart(updatedItems);
  };

  const handleClearCart = () => {
    updateCart([]);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="text-white px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-10 max-w-3xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-400 mb-4">Your cart is empty.</p>
          <Link to="/shop">
            <button className="bg-green-500 hover:bg-green-600 transition text-white font-medium px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0"
              style={{ backgroundColor: '#2b2b2b', borderRadius: '0.5rem', padding: '1rem' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-28 md:w-32 h-28 md:h-32 object-cover rounded cursor-pointer transform hover:scale-105 transition duration-200"
                onClick={() => setModalImage(item.image)}
              />
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  ${item.price} x {item.quantity || 1}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="px-2 py-1 bg-gray-700 rounded text-sm"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="px-2 py-1 bg-gray-700 rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 text-sm mt-2 sm:mt-0"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-center">
            <p className="text-lg sm:text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleClearCart}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded text-sm sm:text-base"
            >
              Clear Cart
            </button>

            {user ? (
              <Link to="/checkout">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </Link>
            ) : (
              <p className="text-red-500 mt-4 text-sm sm:text-base text-center w-full">
                You must <Link to="/account" className="underline">sign in</Link> to check out.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4" onClick={() => setModalImage(null)}>
          <div className="relative max-w-md w-full">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
            <img src={modalImage} alt="Preview" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
