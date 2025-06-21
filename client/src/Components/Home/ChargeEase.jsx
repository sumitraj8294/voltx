import React from 'react';
import '../../styles/ChargeEase.css'; // adjust path as per your structure
import chargeMap from '../../assets/charging-map.png'; // image should be in src/assets/

const ChargeEase = () => {
  return (
    <section className="charge-ease">
      <div className="charge-ease-text">
        <h5>ChargeSmart</h5>
        <h1>Charge Your Vehicle with Ease</h1>
        <p>
          We provide real-time information on charging station availability and costs, 
          ensuring you can charge your EV conveniently and efficiently.
        </p>
        <button className="start-btn">Start Charging</button>
      </div>
      <div className="charge-ease-image">
        <img src={chargeMap} alt="EV charging map" />
      </div>
    </section>
  );
};

export default ChargeEase;
