import React, { useEffect, useState, useRef } from 'react';
import Slider1 from '../Asset/Slider_01.jpg';
import Slider2 from '../Asset/Slider_02.webp';
import Slider3 from '../Asset/Slider_03.webp';
import { Link } from 'react-router-dom';

const images = [Slider1, Slider2, Slider3];
const topTexts = [
  'Experience the freedom of the ride',
  'Eco-friendly. Stylish. Affordable.',
  'Your journey begins with us',
];
const bottomTexts = [
  'Feel the wind and the open road.',
  'Save the planet in style.',
  'Start your adventure today.',
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 6000;
  const animationRef = useRef();
  const startTimeRef = useRef(null);

  const animateProgress = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const percent = Math.min((elapsed / duration) * 100, 100);
    setProgress(percent);

    if (percent < 100) {
      animationRef.current = requestAnimationFrame(animateProgress);
    } else {
      startTimeRef.current = null;
      setProgress(0);
      setCurrent((prev) => (prev + 1) % images.length);
    }
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(animationRef.current);
  }, [current]);

  const nextIndex = (current + 1) % images.length;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={images[current]}
        alt="Hero background"
        className="absolute w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-end justify-start text-white px-6 sm:px-10 md:px-12 py-12 sm:py-16">
        <div className="mb-16 sm:mb-24 max-w-full sm:max-w-[85%] md:max-w-[50%]">
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 transition-opacity duration-1000 leading-snug sm:leading-tight">
            {topTexts[current]}
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6 sm:mb-8">
            <Link to="/shop">
              <button className="bg-green-600 px-6 py-2 text-sm sm:text-base rounded-full w-full sm:w-auto">
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-white text-black px-6 py-2 text-sm sm:text-base rounded-full w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>

          {/* Progress & Details */}
          <div className="w-full sm:w-[90%] md:w-[40vw] pt-6 sm:pt-6">
            {/* Progress Bar */}
            <div className="relative w-full h-1 bg-white rounded overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-1 bg-green-400 ${
                  progress === 0 ? '' : 'transition-all duration-[100ms] ease-linear'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom text + image */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-3 gap-4">
              <p className="text-sm sm:text-base opacity-80 sm:max-w-[60%]">{bottomTexts[current]}</p>
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shadow-lg flex-shrink-0">
                <img
                  src={images[nextIndex]}
                  alt="Next preview"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
