import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import person1 from '../../assets/images/Person_1.jpg';
import person2 from '../../assets/images/Person_2.jpg';
import person3 from '../../assets/images/Person_5.jpg';
import person4 from '../../assets/images/Person_6.jpg';
import rating1 from '../../assets/images/rating-40.png';
import rating2 from '../../assets/images/rating-45.png';
import rating3 from '../../assets/images/rating-50.png';

const testimonials = [
  {
    name: 'John Smith',
    location: 'New York, NY',
    image: person1,
    rating: rating3,
    quote: "The AeroGlide X1 is a superb electric scooter. It's agile, and the battery life is excellent. I'm zipping around town with ease!",
  },
  {
    name: 'Lisa Anderson',
    location: 'San Francisco, CA',
    image: person2,
    rating: rating2,
    quote: "I've paired my AquaSync Smart Water Bottle with my scooter. It's the perfect hydration companion on long rides. I love the reminders!",
  },
  {
    name: 'Michael Chan',
    location: 'Chicago, IL',
    image: person3,
    rating: rating1,
    quote: "The HyperTron V2 is my dream scooter. It's sleek, powerful, and takes me wherever I want to go. The speed is exhilarating!",
  },
  {
    name: 'David Rodriguez',
    location: 'Dallas, TX',
    image: person4,
    rating: rating3,
    quote: "The Levitron E1 is pure magic. It's efficient, quiet, and eco-friendly. I feel like I'm floating on air during every ride!",
  },
  {
    name: 'James Williams',
    location: 'Boston, MA',
    image: person2,
    rating: rating2,
    quote: "The QuantumGlide Z3 is my top choice for scooters. It's ultra-fast, efficient, and the design is sleek and futuristic. I'm a fan!",
  },
];

const AboutTestimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // slower auto-scroll for better reading
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-[#2b2b2b] mt-12 py-12 px-4 sm:px-6 md:px-12 rounded-lg max-w-5xl mx-auto text-center shadow-lg relative">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">What our client family feels</h2>
      <p className="text-gray-400 mb-6 text-sm sm:text-base">Read our top client reviews below</p>

      {/* Arrow Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
      >
        <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
      >
        <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Testimonial */}
      <div className="transition-all duration-500 ease-in-out px-2">
        <img
          src={testimonials[current].image}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full mb-4 object-cover"
          alt={testimonials[current].name}
        />
        <p className="text-lg font-semibold text-white">{testimonials[current].name}</p>
        <img src={testimonials[current].rating} alt="rating" className="mx-auto mt-2 mb-1 w-24" />
        <p className="text-sm text-gray-400 mb-4">{testimonials[current].location}</p>
        <p className="text-base italic max-w-xl mx-auto text-gray-200">
          "{testimonials[current].quote}"
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-green-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutTestimonials;
