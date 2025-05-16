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
      offset -= 5; // Faster scroll speed
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

  const sliderTexts = [
    'Explore green, black variant',
    'Go eco-friendly, good mileage',
    'Stylish design, user-focused build',
    'Disc brake, smooth cushion seat',
    'Fast charge, lightweight frame',
  ];

  return (
    <div className="py-12  overflow-hidden relative">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        Spark Your Ride With Electric Power
      </h2>
      <p className="text-center text-lg text-white max-w-xl mx-auto mb-6">
        With electric power shaping the future of the globe, explore our most reliable products now.
      </p>
      <img src={img2} alt="Electric Vehicle" className="w-[94vw] mx-auto py-4" />

      <div className="flex justify-between px-44 flex-wrap gap-9 my-8 text-center">
        {[
          { title: '60 mph', desc: '4-Speed Mode' },
          { title: '120 mi', desc: 'Range 4Km' },
          { title: '440 lbs', desc: 'Frame Weight' },
          { title: '24 kw', desc: 'Per Charge' },
        ].map((item, i) => (
          <span key={i} className="text-xl font-bold text-white">
            <h3 className="text-4xl font-extrabold">{item.title}</h3>
            <p className="text-base text-white">{item.desc}</p>
          </span>
        ))}
      </div>

      <p className="text-center text-base text-white max-w-4xl mx-auto mb-8">
        Are you ready to take your ride to new heights? Say goodbye to noisy engines.
        Explore the future of transportation with our awe-inspiring electric vehicle.
      </p>

      {/* Buttons with line passing through */}
      <div className="relative w-full flex justify-center items-center py-8">
        <div className="absolute h-px w-full bg-gray-400 z-0" style={{ top: '50%' }} />
        <div className="flex justify-center gap-4 relative z-10 px-4">
          <Link to="/contact">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Buy now
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition">
              View shop
            </button>
          </Link>
        </div>
      </div>

      {/* Scrolling slider container (centered and smoothed) */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full"
        style={{ height: '100px', position: 'relative', top: '50px' }} // 👈 Move slider down for better visual centering
      >
        {/* Scrolling text centered vertically */}
        <div
          ref={marqueeRef}
          className="flex items-center gap-12 text-white text-4xl font-semibold whitespace-nowrap 
          px-6 absolute top-[14px] transform -translate-y-1/2 z-5"
          style={{ willChange: 'transform' }}
        >
          {Array.from({ length: 6 }).map((_, idx) =>
            sliderTexts.map((text, i) => (
              <React.Fragment key={`${idx}-${i}`}>
                <span>{text}</span>
                {i !== sliderTexts.length - 1 && (
                  <span className="text-white text-7xl mx-8 leading-none relative top-[10px]">*</span> // 👈 Adjust vertical alignment of asterisk
                )}
              </React.Fragment>
            ))
          )}
        </div>

        {/* Gradient overlay to focus attention on center */}
        {/* Comment this block if you want to remove the gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 10,
            background: 'radial-gradient(circle,rgba(255, 255, 255, 0.07) 0%, rgba(0,0,0,0.8) 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default HeroNext;
