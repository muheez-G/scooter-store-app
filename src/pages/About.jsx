import React from 'react';
import AboutImage from '../Components/About/AboutImage';
import AboutStats from '../Components/About/AboutStats';
import AboutIntro from '../Components/About/AboutIntro';
import AboutCTA from '../Components/About/AboutCTA';
import AboutVideo from '../Components/About/AboutVideo';
import AboutSlide from '../Components/About/AboutSlide';
import AboutTestimonials from '../Components/About/AboutTestimonials';
import AboutLogos from '../Components/About/AboutLogos';

const About = () => (
  <div className="py-12 overflow-hidden relative text-white">
    <h1 className="text-4xl font-bold text-center mb-7">About Us</h1>
    <AboutImage />
    <AboutStats />
    <AboutIntro />
    <AboutCTA />
    <AboutVideo />
    <AboutSlide />
    <AboutTestimonials />
    <AboutLogos />
  </div>
);

export default About;
