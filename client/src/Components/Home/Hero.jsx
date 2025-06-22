import React from 'react';
import '../../styles/Hero.css'; 
import evImage from '../../assets/charging-hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="tagline">- Explore EV charging</p>
        <h1>Your one-stop hub for EV charging</h1>
        <p>Discover charging stations and tips for EV owners.</p>
        <div className="hero-buttons">
        <Link to="/charge">
  <button className="find-btn">Find a station</button>
</Link>
          <button className="learn-btn">Learn more</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={evImage} alt="EV Charging" />
      </div>
    </section>
  );
};

export default Hero;
