import React, { useEffect, useState, useRef } from 'react';
import Slider1 from '../assets/images/Slider_01.jpg';
import Slider2 from '../assets/images/Slider_02.webp';
import Slider3 from '../assets/images/Slider_03.webp';

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
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const animationRef = useRef();

  // Animate progress bar with precise control
  const animateProgress = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const percent = Math.min((elapsed / duration) * 100, 100);
    setProgress(percent);

    if (percent < 100) {
      animationRef.current = requestAnimationFrame(animateProgress);
    } else {
      startTimeRef.current = null;
      setProgress(0); // Reset bar smoothly
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
      <img
        src={images[current]}
        alt="Hero background"
        className="absolute w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="relative z-10 h-full flex items-end justify-start text-white px-12 py-16">
        <div className="mb-24 max-w-[42vw]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-opacity duration-1000">
            {topTexts[current]}
          </h1>

          <div className="flex space-x-4 mb-8">
            <button className="bg-green-600 px-6 py-2 rounded-full">Shop Now</button>
            <button className="bg-white text-black px-6 py-2 rounded-full">Learn More</button>
          </div>

          {/* Progress bar */}
          <div className="w-[40vw] pt-6">
            <div className="relative w-full h-1 bg-white rounded overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-1 bg-green-400 ${
                  progress === 0 ? '' : 'transition-all duration-[100ms] ease-linear'
                }`}
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Text + preview image */}
            <div className="flex justify-between items-start mt-3">
              <p className="text-base opacity-80 max-w-[60%]">{bottomTexts[current]}</p>
              <div className="w-32 h-32 shadow-lg flex-shrink-0">
                <img
                  src={images[nextIndex]}
                  alt="Next preview"
                  className="w-full h-full object-cover"
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
