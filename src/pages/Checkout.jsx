import React, { useEffect, useState } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', address: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const total = cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'number') {
      newValue = newValue.replace(/\D/g, '').slice(0, 16);
    }

    if (name === 'expiry') {
      newValue = newValue.replace(/[^\d/]/g, '').slice(0, 5);
      if (newValue.length === 2 && !newValue.includes('/')) {
        newValue += '/';
      }
    }

    if (name === 'cvv') {
      newValue = newValue.replace(/\D/g, '').slice(0, 4);
    }

    setCardDetails((prev) => ({ ...prev, [name]: newValue }));
  };

  const isValidExpiry = (expiry) => {
    const [month, year] = expiry.split('/');
    const now = new Date();
    const mm = parseInt(month, 10);
    const yy = parseInt(year, 10);
    if (!mm || !yy || mm < 1 || mm > 12) return false;

    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;
    return yy > currentYear || (yy === currentYear && mm >= currentMonth);
  };

  const handleCheckout = () => {
    const { number, expiry, cvv, address } = cardDetails;

    if (!number || number.length !== 16) {
      return setError('Please enter a valid 16-digit card number.');
    }
    if (!expiry || expiry.length !== 5 || !isValidExpiry(expiry)) {
      return setError('Please enter a valid expiry date (MM/YY).');
    }
    if (!cvv || cvv.length < 3 || cvv.length > 4) {
      return setError('Please enter a valid CVV (3 or 4 digits).');
    }
    if (!address.trim()) {
      return setError('Please enter your shipping address.');
    }

    setError('');
    localStorage.removeItem('cart');
    setSuccess(true);
    setTimeout(() => {
      window.location.href = '/tracking';
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {cart.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <img src={item.image} alt={item.name} className="w-24 h-24 rounded" />
          <div>
            <h2 className="text-xl font-medium">{item.name}</h2>
            <p className="text-gray-400">${item.price} x {item.quantity || 1}</p>
            <p className="text-gray-300">Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
      </div>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="number"
          placeholder="1234 5678 9012 3456"
          className="w-full p-2 rounded bg-[#2b2b2b] text-black placeholder-white"
          value={cardDetails.number}
          onChange={handleInputChange}
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            className="w-1/2 p-2 rounded bg-[#2b2b2b] text-black placeholder-white"
            value={cardDetails.expiry}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="123"
            className="w-1/2 p-2 rounded bg-[#2b2b2b] text-black placeholder-white"
            value={cardDetails.cvv}
            onChange={handleInputChange}
          />
        </div>
        <textarea
          name="address"
          placeholder="Shipping Address"
          className="w-full p-2 rounded bg-[#2b2b2b] text-black placeholder-white"
          value={cardDetails.address}
          onChange={(e) => setCardDetails({ ...cardDetails, address: e.target.value })}
        ></textarea>
      </div>

      <button
        onClick={handleCheckout}
        className="mt-6 bg-green-500 hover:bg-green-600 py-2 px-6 rounded text-white w-full font-medium"
      >
        Pay Now
      </button>

      {error && (
        <div className="mt-4 bg-red-500 text-white p-3 rounded text-center font-medium">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-4 bg-green-500 text-white p-3 rounded text-center font-medium">
          Payment successful! Redirecting...
        </div>
      )}
    </div>
  );
};

export default Checkout;
