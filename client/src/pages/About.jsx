import React from 'react';
import '../styles/About.css';
import introImage from '../assets/about-intro.png';
import missionImage from '../assets/about-intro.png';
import featureImg1 from '../assets/about-intro.png';
import featureImg2 from '../assets/about-intro.png';
import featureImg3 from '../assets/about-intro.png';
import founderImg from '../assets/founder.jpg'
import backendEngineer from '../assets/backendEng.png'
import UIUXDesginer from '../assets/UIUXdesginer.png'

const About = () => {
  return (
    <div className="about-page">
      {/* Intro */}
      <section className="about-intro">
        <div className="about-intro-content">
          <div className="about-text">
            <h1>About VoltX</h1>
            <p>
              VoltX is dedicated to simplifying electric vehicle charging. We connect EV owners with reliable,
              real-time information on charging stations, helping you stay on the road with confidence.
            </p>
          </div>
          <img src={introImage} alt="About Intro" className="about-img" />
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="feature-card">
          <img src={featureImg1} alt="Feature 1" />
          <h3>Real-time Station Data</h3>
          <p>Accurate and live updates on charger availability, speed, and pricing.</p>
        </div>
        <div className="feature-card">
          <img src={featureImg2} alt="Feature 2" />
          <h3>Smart Search</h3>
          <p>Find stations near you or across cities with smart search and map view.</p>
        </div>
        <div className="feature-card">
          <img src={featureImg3} alt="Feature 3" />
          <h3>Eco-conscious Mission</h3>
          <p>We aim to support sustainable transport and reduce carbon footprint.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              To accelerate the adoption of electric vehicles by building a reliable and accessible
              charging network for everyone.
            </p>

            <h2>Our Vision</h2>
            <p>
              A cleaner, greener future powered by smart and sustainable transportation.
            </p>
          </div>
          <img src={missionImage} alt="Mission" className="mission-img" />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src={founderImg} alt="Founder" />
            <h4>Sumit Raj</h4>
            <p>Founder & Frontend Developer</p>
          </div>
          <div className="team-card">
            <img src={backendEngineer} alt="Backend Lead" />
            <h4>Riya Sharma</h4>
            <p>Backend Engineer</p>
          </div>
          <div className="team-card">
            <img src={UIUXDesginer} alt="Designer" />
            <h4>Akash Mehta</h4>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <h3>10,000+</h3>
            <p>Charging Searches</p>
          </div>
          <div className="impact-card">
            <h3>5,000+</h3>
            <p>Stations Listed</p>
          </div>
          <div className="impact-card">
            <h3>98%</h3>
            <p>User Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
