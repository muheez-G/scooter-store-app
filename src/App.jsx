import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
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
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
