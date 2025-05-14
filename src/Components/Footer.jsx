import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} Scooter Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
