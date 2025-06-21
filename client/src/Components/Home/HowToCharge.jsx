import React from 'react';
import '../../styles/HowToCharge.css'; // adjust the path if needed

const HowToCharge = () => {
  return (
    <section className="how-to-charge">
      <div className="charge-container">
        <div className="charge-left">
          <h1>How to Charge Your EV</h1>
          <p>Just 3 simple steps to charge your EV.</p>
          <button className="join-btn">Join Now</button>
        </div>
        <div className="charge-right">
          <div className="step">
            <div className="circle">1</div>
            <div className="step-text">
              <h3>Find a nearby charging station</h3>
              <p>Use our map to locate chargers near you.</p>
            </div>
          </div>
          <div className="connector"></div>

          <div className="step">
            <div className="circle">2</div>
            <div className="step-text">
              <h3>Check availability and pricing</h3>
              <p>See if it's free and how much it costs.</p>
            </div>
          </div>
          <div className="connector"></div>

          <div className="step">
            <div className="circle">3</div>
            <div className="step-text">
              <h3>Start charging!</h3>
              <p>Plug in and go — it’s that simple.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToCharge;
