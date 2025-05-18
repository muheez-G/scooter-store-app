import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img2 from '../assets/images/ev-b1.5.webp';

const HeroNext = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current || !containerRef.current) return;

    const marquee = marqueeRef.current;
    let offset = 0;
    let animationFrameId;

    const move = () => {
      offset -= 5;
      marquee.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }
      animationFrameId = requestAnimationFrame(move);
    };

    const start = () => {
      if (!animationFrameId) move();
    };

    const stop = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    containerRef.current.addEventListener('mouseenter', stop);
    containerRef.current.addEventListener('mouseleave', start);
    start();

    return () => {
      containerRef.current?.removeEventListener('mouseenter', stop);
      containerRef.current?.removeEventListener('mouseleave', start);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="py-12 px-4 sm:px-8 md:px-12 overflow-hidden relative">
      {/* Headings */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Spark Your Ride With Electric Power
      </h2>
      <p className="text-center text-base sm:text-lg text-white max-w-xl mx-auto mb-6">
        With electric power shaping the future of the globe, explore our most reliable products now.
      </p>

      {/* Vehicle Image */}
      <img src={img2} alt="Electric Vehicle" className="w-full sm:w-[94vw] mx-auto py-4" />

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-8 my-8 text-center px-4">
        {[
          { title: '60 mph', desc: '4-Speed Mode' },
          { title: '120 mi', desc: 'Range 4Km' },
          { title: '440 lbs', desc: 'Frame Weight' },
          { title: '24 kw', desc: 'Per Charge' },
        ].map((item, i) => (
          <div key={i} className="text-white">
            <h3 className="text-3xl sm:text-4xl font-extrabold">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-center text-sm sm:text-base text-white max-w-3xl mx-auto mb-10 px-4">
        Are you ready to take your ride to new heights? Say goodbye to noisy engines.
        Explore the future of transportation with our awe-inspiring electric vehicle.
      </p>

      {/* CTA Buttons */}
      <div className="relative w-full flex justify-center items-center py-6 sm:py-8">
        <div className="absolute h-px w-full bg-gray-400 z-0" style={{ top: '50%' }} />
        <div className="flex flex-col sm:flex-row gap-4 z-10 px-4">
          <Link to="/shop">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition w-full sm:w-auto">
              Buy now
            </button>
          </Link>
          <Link to="/shop">
            <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition w-full sm:w-auto">
              View shop
            </button>
          </Link>
        </div>
      </div>

      {/* Marquee Section */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full h-[60px] sm:h-[80px] md:h-[100px] bg-[#121212] flex items-center"
      >
        <div
          ref={marqueeRef}
          className="flex items-center gap-8 text-white text-lg sm:text-xl md:text-3xl font-semibold whitespace-nowrap px-6 z-10"
          style={{ willChange: 'transform' }}
        >
          {Array.from({ length: 6 }).map((_, idx) =>
            [
              'Explore green, black variant',
              'Go eco-friendly, good mileage',
              'Stylish design, user-focused build',
              'Disc brake, smooth cushion seat',
              'Fast charge, lightweight frame',
            ].map((text, i) => (
              <React.Fragment key={`${idx}-${i}`}>
                <span>{text}</span>
                {i !== 4 && (
                  <span className="text-white text-2xl sm:text-4xl mx-4 sm:mx-6">•</span>
                )}
              </React.Fragment>
            ))
          )}
        </div>

        {/* Optional gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-60 z-20" />
      </div>
    </div>
  );
};

export default HeroNext;
