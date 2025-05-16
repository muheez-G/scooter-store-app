import React from 'react';
import img1 from '../assets/images/IMGs_01.jpg';
import img2 from '../assets/images/IMGs_02.jpg';
import img3 from '../assets/images/IMGs_03.jpg';
import img4 from '../assets/images/IMGs_04.jpg';
import img5 from '../assets/images/IMGs_05.jpg';
import img6 from '../assets/images/IMGs_06.jpg';

import img12 from '../assets/images/Etlix.png';
import img23 from '../assets/images/lastica.png';
import img34 from '../assets/images/Orion.png';
import img45 from '../assets/images/minofy.png';
import img56 from '../assets/images/monest.png';
import img67 from '../assets/images/happenz.png';
import imgs4 from '../assets/images/imgs4.jpg';

import { PiTruckDuotone } from 'react-icons/pi';
import { MdPayment } from 'react-icons/md';
import { BsHeadset } from 'react-icons/bs';
import { LuCodesandbox } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const PreFooter = () => {
  return (
    <div className="space-y-0">
      {/* First Section - Logos shown first with overlay */}
      <div className="grid grid-cols-2 sm:grid-cols-3 cursor-pointer md:grid-cols-6 w-full">
        {[
          { img: img1, hover: img12 },
          { img: img2, hover: img23 },
          { img: img3, hover: img34 },
          { img: img4, hover: img45 },
          { img: img5, hover: img56 },
          { img: img6, hover: img67 },
        ].map(({ img, hover }, i) => (
          <span
            key={i}
            className="relative group overflow-hidden bg-[#2b2b2b] flex items-center justify-center h-32"
          >
            {/* Hover image - show by default */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src={hover}
                alt=""
                className="w-[50%] h-full object-contain"
              />
              {/* Dark overlay that disappears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80 group-hover:opacity-0 transition duration-500 z-20" />
            </div>

            {/* Background image appears on hover */}
            <img
              src={img}
              alt=""
              className="absolute inset-0 z-30 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />
          </span>
        ))}
      </div>

      {/* Second Section - CTA */}
      <div
        className="text-white text-center py-20 md:py-32 px-4 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${imgs4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-xl">
          Glow your ride with energetic E-scooters
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          Empower your ride with strong Electric bikes from us
        </p>
        <Link to="/shop">
          <button className="bg-green-500 hover:bg-green-600 transition text-white font-medium px-6 py-3 rounded-full">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Third Section - Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:px-12 md:py-16">
        {[
          {
            icon: <PiTruckDuotone size={36} className="text-green-500 mb-2" />,
            title: 'Fastest Delivery',
            desc: 'Delivery ordered within 24 hours',
          },
          {
            icon: <LuCodesandbox size={36} className="text-green-500 mb-2" />,
            title: 'Trustworthy Service',
            desc: 'Trustworthy and reliable service provider',
          },
          {
            icon: <MdPayment size={36} className="text-green-500 mb-2" />,
            title: 'Secure Payments',
            desc: 'Payment protected by billdesk pro',
          },
          {
            icon: <BsHeadset size={36} className="text-green-500 mb-2" />,
            title: '24*7 Support',
            desc: 'Customer service active 24*7 all-over',
          },
        ].map(({ icon, title, desc }, i) => (
          <span
            key={i}
            className="bg-[#2b2b2b] text-white p-6 rounded-xl min-h-[220px] flex flex-col justify-start items-start text-left"
          >
            {icon}
            <h3 className="text-lg font-semibold mt-2">{title}</h3>
            <p className="text-sm text-gray-300 mt-1">{desc}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PreFooter;
