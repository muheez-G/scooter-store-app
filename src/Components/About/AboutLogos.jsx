import React from 'react';
import img1 from '../../assets/images/IMGs_01.jpg';
import img2 from '../../assets/images/IMGs_02.jpg';
import img3 from '../../assets/images/IMGs_03.jpg';
import img4 from '../../assets/images/IMGs_04.jpg';
import img5 from '../../assets/images/IMGs_05.jpg';
import img6 from '../../assets/images/IMGs_06.jpg';
import img12 from '../../assets/images/Etlix.png';
import img23 from '../../assets/images/lastica.png';
import img34 from '../../assets/images/Orion.png';
import img45 from '../../assets/images/minofy.png';
import img56 from '../../assets/images/monest.png';
import img67 from '../../assets/images/happenz.png';

const logoPairs = [
  { img: img1, hover: img12 },
  { img: img2, hover: img23 },
  { img: img3, hover: img34 },
  { img: img4, hover: img45 },
  { img: img5, hover: img56 },
  { img: img6, hover: img67 },
];

const AboutLogos = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full mt-12">
    {logoPairs.map(({ img, hover }, i) => (
      <div key={i} className="relative group overflow-hidden bg-[#5c5c5c] flex items-center justify-center h-24 sm:h-32">
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img src={hover} alt="" className="w-[50%] h-full object-contain" />
          <div className="absolute inset-0 bg-black opacity-80 group-hover:opacity-0 transition duration-500 z-20" />
        </div>
        <img
          src={img}
          alt=""
          className="absolute inset-0 z-30 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
        />
      </div>
    ))}
  </div>
);

export default AboutLogos;
