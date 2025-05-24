import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import HeroNext from '../Components/HeroNext';
import HomeThree from '../Components/HomeThree';
import PreFooter from '../Components/PreFooter';
// import ProductGrid from '../Components/ProductGrid'; // You can add this later

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HeroNext/>
      <HomeThree/>
      <PreFooter/>
      {/* Add your next components here */}
    </div>
  );
};

export default Home;
