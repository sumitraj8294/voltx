import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'leaflet/dist/leaflet.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Charge from './pages/Charge';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<UserDashboard />} />

      </Routes> 

      <Footer /> 
    </>
  );
};

export default App;
