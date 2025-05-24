import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import NotFound from './Pages/NotFound'; // <-- Import NotFound
import Account from './Pages/Account';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';
import Tracking from './Pages/Tracking';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-[#1b1b1b] text-white">
        <PreNavbar />
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <div className="px-6 py-8">
                  <About />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="px-6 py-8">
                  <Contact />
                </div>
              }
            />
            <Route
              path="/shop"
              element={
                <div className="px-6 py-8">
                  <Shop />
                </div>
              }
            />
            <Route
              path="/account"
              element={
                <div className="px-6 py-8">
                  <Account />
                </div>
              }
            />
            <Route
              path="/cart"
              element={
                <div className="px-6 py-8">
                  <Cart />
                </div>
              }
            />
            <Route
              path="/checkout"
              element={
                <div className="px-6 py-8">
                  <Checkout />
                </div>
              }
            />
            <Route
              path="/tracking"
              element={
                <div className="px-6 py-8">
                  <Tracking />
                </div>
              }
            />
            <Route path="*" element={<NotFound />} /> {/* <-- Catch-all */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
