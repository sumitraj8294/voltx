import React from 'react';
import '../../styles/NewEra.css'; // ✅ Update path if styles are in src/styles
import eraImage from '../../assets/new-era-image.png'; // ✅ Update path if needed

const NewEra = () => {
  return (
    <section className="new-era">
      <div className="new-era-image">
        <img src={eraImage} alt="EV charging future map" />
      </div>
      <div className="new-era-text">
        <h1>Introducing a New Era of Charging</h1>
        <p>Join our community and drive into the future today!</p>
        <button className="signup-btn">Sign Up</button>
      </div>
    </section>
  );
};

export default NewEra;
