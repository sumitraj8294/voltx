import React from 'react';
import '../../styles/UserReviews.css'; // adjust if path differs
import user1 from '../../assets/user1.png'; // replace with actual paths
import user2 from '../../assets/user1.png';
import user3 from '../../assets/user1.png';

const UserReviews = () => {
  return (
    <section className="user-reviews">
      <h2>User Reviews</h2>
      <p>See what our users are saying</p>
      <div className="reviews-container">
        <div className="review-card">
          <img src={user1} alt="Emily Green" className="review-photo" />
          <p className="review-text">Since using EVChargeHub, charging is hassle-free!</p>
          <div className="stars">★★★★★</div>
          <h4>Emily Green</h4>
          <span>EV Owner, GreenDrive</span>
        </div>
        <div className="review-card">
          <img src={user2} alt="Mark Blue" className="review-photo" />
          <p className="review-text">EVChargeHub made my trips smoother!</p>
          <div className="stars">★★★★★</div>
          <h4>Mark Blue</h4>
          <span>Tech Enthusiast</span>
        </div>
        <div className="review-card">
          <img src={user3} alt="Sarah White" className="review-photo" />
          <p className="review-text">A game changer for EV users!</p>
          <div className="stars">★★★★★</div>
          <h4>Sarah White</h4>
          <span>EV Advocate, EcoDrive</span>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
