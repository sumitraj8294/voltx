import React from 'react';
import '../../styles/ChargeSaver.css'; // adjust path if needed
import smartChargeImg from '../../assets/charging-smart.png'; // make sure image exists

const ChargeSaver = () => {
  return (
    <section className="charge-saver">
      <div className="charge-saver-image">
        <img src={smartChargeImg} alt="Smart charging options" />
      </div>
      <div className="charge-saver-text">
        <h5>ChargeSaver</h5>
        <h1>Save on Charging Costs with Smart</h1>
        <p>
          Our platform helps you find the most affordable charging options and provides insights 
          into charging speeds to maximize your EV experience.
        </p>
        <button className="explore-btn">Explore Options</button>
      </div>
    </section>
  );
};

export default ChargeSaver;
