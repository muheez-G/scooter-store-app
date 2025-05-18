import React, { useEffect, useRef } from 'react';

const AboutSlide = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current || !containerRef.current) return;

    const marquee = marqueeRef.current;
    let offset = 0;
    let animationFrameId;

    const move = () => {
      offset -= 2;
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
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-[80px] sm:h-[100px] bg-[#121212] flex items-center"
    >
      {/* Sliding marquee content */}
      <div
        ref={marqueeRef}
        className="flex items-center gap-12 text-white text-xl sm:text-3xl font-semibold whitespace-nowrap px-6 z-10"
        style={{ willChange: 'transform' }}
      >
        {Array.from({ length: 6 }).map((_, idx) =>
          ['Explore green, black variant', 'Go eco-friendly, good mileage', 'Stylish design, user-focused build', 'Disc brake, smooth cushion seat', 'Fast charge, lightweight frame'].map((text, i) => (
            <React.Fragment key={`${idx}-${i}`}>
              <span className="align-middle leading-none">{text}</span>
              {i !== 4 && (
                <span className="text-white text-3xl sm:text-6xl mx-4 sm:mx-8 align-middle leading-none flex items-center justify-center">
                  *
                </span>
              )}
            </React.Fragment>
          ))
        )}
      </div>

      {/* Gradient overlay (on top) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-70 z-20" />
    </div>
  );
};

export default AboutSlide;
