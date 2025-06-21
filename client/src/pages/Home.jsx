import React from 'react';
import Hero from '../Components/Home/Hero';
import NewEra from '../Components/Home/NewEra';
import ChargeEase from '../Components/Home/ChargeEase';
import ChargeSaver from '../Components/Home/ChargeSaver';
import HowToCharge from '../Components/Home/HowToCharge';
import UserReviews from '../Components/Home/UserReviews';

const Home = () => {
  return (
    <div>
      <Hero />
      <NewEra/>
      <ChargeEase/>
      <ChargeSaver/>
      <HowToCharge/>
      <UserReviews/>
      {/* Add more sections here like Features, Testimonials, etc. */}
    </div>
  );
};

export default Home;
