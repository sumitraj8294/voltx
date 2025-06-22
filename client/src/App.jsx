import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
import Charge from './pages/Charge';
// import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />  */}
      </Routes> 

      <Footer /> 
    </>
  );
};

export default App;
